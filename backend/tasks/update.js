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

const downloadCountriesAsync = async function() {
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

const downloadArchiveAsync = async function(source) {
  try {
    // 1. Downloading *.zip:
    var response = await axios.get(source, {
      params: {
        downloadformat: 'xml',
      },
      responseType: 'stream',
    });
    //
    // 2. Extracting *.xml:
    const archive = await response.data;
    const file = await new Promise((resolve, reject) => {
      archive
        .pipe(unzipper.Parse())
        .on('entry', function(entry) {
          // Archives should only contain one entry.
          resolve(entry);
        });
    });
    //
    // 3. Getting a String:
    const xmlChunks = [];
    const xml = await new Promise((resolve, reject) => {
      file.on('data', chunk => xmlChunks.push(chunk));
      file.on('error', reject);
      file.on('end', () => resolve(Buffer.concat(xmlChunks).toString('utf8')));
    });
    //
    // 4. Getting an Object:
    const parsedXml = await new Promise((resolve, reject) => {
      // TODO: Handle errors
      parseString(xml, function(error, result) {
        resolve(result);
      });
    });
    return parsedXml.Root.data[0].record;
  } catch (error) {
    // TODO: Better error handling.
    console.log("catch");
    console.error(error);
  }
};

const parseEmissionsAsync = function(xmlFile) {
  // "Country Name","Country Code","Indicator Name","Indicator Code","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"

  // Array:
  return {
    name: null,
    code: null,
    valuesPerYear: null,
  };
};

const parsePopulationsAsync = function(xmlFile) {
  // "Country Name","Country Code","Indicator Name","Indicator Code","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018",

  // Array:
  return {
    name: null,
    code: null,
    valuesPerYear: null,
  };
};

const parseMetadataAsync = function(file) {
  // "Country Code","Region","IncomeGroup","SpecialNotes","TableName",
  return {
    code: null,
    region: null,
    income: null,
  }
};

module.exports = downloadArchiveAsync;