'use strict'

const http = require('http');
const axios = require('axios');
const unzipper = require('unzipper');
const parseString = require('xml2js').parseString;
const _ = require('lodash');

// TODO: Move to config.
const sources = {
  countries: "http://api.worldbank.org/v2/country",
  emissions: "http://api.worldbank.org/v2/en/indicator/EN.ATM.CO2E.KT",
  populations: "http://api.worldbank.org/v2/en/indicator/SP.POP.TOTL",
};

// Downloads a *.zip:
const downloadArchiveAsync = async function(source) {
  var response = await axios.get(source, {
    params: {
      downloadformat: 'xml',
    },
    responseType: 'stream',
  });
  return await response.data;
};

// Extracts an *.xml:
const extractFileAsync = async function(archive) {
  return await new Promise((resolve, reject) => {
    archive
      .pipe(unzipper.Parse())
      .on('entry', function(entry) {
        // Archives should only contain one entry.
        resolve(entry);
      });
  });
};

// Gets XML as a String:
const readFileAsStringAsync = async function(file) {
  const chunks = [];
  return await new Promise((resolve, reject) => {
    file.on('data', chunk => chunks.push(chunk));
    file.on('error', reject);
    file.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
};

// Gets values from XML as an Array of Objects:
const parseXmlAsync = async function(xml) {
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
      value: Number(record.field[3]._),
    };
  });
};

const getValuesAsync = async function(source) {
  try {
    const archive = await downloadArchiveAsync(source);
    const file = await extractFileAsync(archive);
    const xml = await readFileAsStringAsync(file);
    return await parseXmlAsync(xml);
  } catch (error) {
    // TODO: Better error handling.
    console.error(error);
  }
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
    return _.filter(items, function(item) {
      // The list contains both countries & regions, so we filter out regions.
      return item.region.value != 'Aggregates';
    });
  } catch (error) {
    // TODO: Better error handling.
    console.error(error);
  }
};

module.exports = getValuesAsync;