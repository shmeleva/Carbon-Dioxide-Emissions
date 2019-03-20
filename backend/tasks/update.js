'use strict'

const http = require('http');
const axios = require('axios');
const unzipper = require('unzipper');
const parseString = require('xml2js').parseString;
const _ = require('lodash');

// TODO: Move to config.
const sources = {
  countries: 'http://api.worldbank.org/v2/country',
  emissions: 'http://api.worldbank.org/v2/en/indicator/EN.ATM.CO2E.KT',
  populations: 'http://api.worldbank.org/v2/en/indicator/SP.POP.TOTL',
};

// Downloads a file
const downloadAsync = async function(source) {
  var response = await axios.get(source, {
    params: {
      downloadformat: 'xml',
    },
    responseType: 'stream',
  });
  return await response.data;
};

// Extracts a file from *.zip
const extractAsync = async function(archive) {
  return await new Promise((resolve, reject) => {
    archive
      .pipe(unzipper.Parse())
      .on('entry', function(entry) {
        // Archives should only contain one entry.
        resolve(entry);
      });
  });
};

// Reads a file as a string
const readAsStringAsync = async function(file) {
  const chunks = [];
  return await new Promise((resolve, reject) => {
    file.on('data', chunk => chunks.push(chunk));
    file.on('error', reject);
    file.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
};

// Reads values from XML as an array
const parseXmlAsync = async function(xml, valueName) {
  const parsedXml = await new Promise((resolve, reject) => {
    parseString(xml, function(error, result) {
      resolve(result);
    });
  });

  return _.map(parsedXml.Root.data[0].record, (record) => {
    return {
      country: record.field[0]._,
      code: record.field[0].$.key,
      year: Number(record.field[2]._),
      [valueName]: Number(record.field[3]._),
    };
  });
};

const getValuesAsync = async function(source, valueName) {
  try {
    const archive = await downloadAsync(source);
    const file = await extractAsync(archive);
    const xml = await readAsStringAsync(file);
    const values = await parseXmlAsync(xml, valueName);
    return values;
  } catch (error) {
    // TODO: Better error handling.
    console.error(error);
  }
};

const getEmissionsAsync = async function() {
  return await getValuesAsync(sources.emissions, "emissions");
};

const getPopulationsAsync = async function() {
  return await getValuesAsync(sources.populations, "population");
};

const getCountriesAsync = async function() {
  try {
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
  } catch (error) {
    // TODO: Better error handling.
    console.error(error);
  }
};

const getDataAsync = async function() {
  const countries = await getCountriesAsync();
  const emissions = await getValuesAsync(sources.emissions, "emissions");
  const populations = await getValuesAsync(sources.populations, "population");

  return _.map(countries, (country) => {
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
          year: i.year,
          value: i.emissions,
          valuePerCapita: i.emissions / i.population,
        };
      }),
    };
  });
};

module.exports = getDataAsync;