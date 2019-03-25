'use strict'

const _ = require('lodash');
const axios = require('axios');
const config = require('../config');
const parseString = require('xml2js').parseString;
const unzipper = require('unzipper');

const Version = require('../models/version');
const Country = require('../models/country');

const download = async function (source) {
  var response = await axios.get(source, {
    params: {
      downloadformat: 'xml',
    },
    responseType: 'stream',
  });
  return response.data;
};

const extract = async function (archive) {
  return await new Promise((resolve, reject) => {
    archive
      .pipe(unzipper.Parse())
      .on('entry', function (entry) {
        // Archives should only contain one entry.
        resolve(entry);
      });
    // TODO: call reject(new Error("")) on error!
  });
};

const read = async function (file) {
  const chunks = [];
  return await new Promise((resolve, reject) => {
    file.on('data', chunk => chunks.push(chunk));
    file.on('error', reject);
    file.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
};

const parse = async function (xml, name) {
  const parsedXml = await new Promise((resolve, reject) => {
    parseString(xml, (error, result) => {
      if (error) {
        reject(new Error(error));
      }
      resolve(result);
    });
  });
  return _.map(parsedXml.Root.data[0].record, (record) => {
    return {
      code: record.field[0].$.key,
      year: Number(record.field[2]._),
      [name]: Number(record.field[3]._),
    };
  });
};

const getValues = async function (source, name) {
  var xml = await read(await extract(await download(source)));
  return await parse(xml, name);
};

const getCountries = async function () {
  const response = await axios.get(config.worldBank.countries, {
    params: {
      format: 'json',
      per_page: 1024, // The current number of countries & regions is 304.
    }
  });
  const [, items] = await response.data;
  return _.filter(items, (item) => {
    // The list contains both countries & regions, so we filter out regions.
    return item.region.value != 'Aggregates';
  });
};

const getPopulatedCountries = async function (version) {
  const countries = await getCountries();
  const emissions = _.groupBy(await getValues(config.worldBank.emissions, "emission"), "code");
  const populations = _.groupBy(await getValues(config.worldBank.populations, "population"), "code");

  return _.map(countries, (country) => {
    // TODO: Group emissions and populations by `code` first!
    const countryEmissions = _.values(_.merge(
      _.keyBy(emissions[country.id], 'year'),
      _.keyBy(populations[country.id], 'year')));
    return {
      code: country.id,
      name: country.name,
      region: country.region.value,
      income: country.incomeLevel.value,
      superpower: _.includes(config.superpowers, country.id),
      emissions: _.map(countryEmissions, (i) => {
        return {
          year: i.year || null,
          value: i.emission || null,
          valuePerCapita: (i.emission / i.population) || null,
        };
      }),
      version: version,
    };
  });
};

// TODO: Avoid unnecessary updates,
// e.g., by calculating an MD5 & comparing
// it to an existing version.
const update = async function () {
  console.log("Update started...");
  try {
    const version = await new Version({ dirty: true }).save();
    await Country.insertMany(await getPopulatedCountries(version._id));
    version.dirty = false;
    await version.save();
    console.log("Update completed.");
  } catch (error) {
    console.error(error);
    // TODO:
    // 1. Delete `version`.
    // 2. Retry, if `error` is a network error.
  }
}

module.exports = update;