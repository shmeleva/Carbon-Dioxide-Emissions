'use strict'

const _ = require('lodash');
const axios = require('axios');
const http = require('http');
const mongoose = require('mongoose');
const parseString = require('xml2js').parseString;
const unzipper = require('unzipper');

const Version = require('../models/version');
const Emission = require('../models/emission');
const Country = require('../models/country');

// TODO: Move to config.
const sources = {
  countries: 'http://api.worldbank.org/v2/country',
  emissions: 'http://api.worldbank.org/v2/en/indicator/EN.ATM.CO2E.KT',
  populations: 'http://api.worldbank.org/v2/en/indicator/SP.POP.TOTL',
};


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
  // TODO: call reject(new Error("...")) on error
  return await new Promise((resolve, reject) => {
    archive
      .pipe(unzipper.Parse())
      .on('entry', function (entry) {
        // Archives should only contain one entry.
        resolve(entry);
      });
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
  const response = await axios.get(sources.countries, {
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
  const emissions = await getValues(sources.emissions, "emission");
  const populations = await getValues(sources.populations, "population");

  return _.map(countries, (country) => {
    // TODO: GroupBy.
    const countryEmissions = _.values(_.merge(
      _.keyBy(_.filter(emissions, (i) => i.code === country.id), 'year'),
      _.keyBy(_.filter(populations, (i) => i.code === country.id), 'year')));
    return {
      code: country.id,
      name: country.name,
      region: country.region.value,
      income: country.incomeLevel.value,
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

// TODO: Handle potential errors
const update = async function () {
  try {
    const version = await new Version({
      valid: false,
    }).save();

    const countries = await getPopulatedCountries(version._id);
    await Country.insertMany(countries);

    version.valid = true;
    await version.save();
  } catch (error) {
    console.error(error);
  }
}

module.exports = update;