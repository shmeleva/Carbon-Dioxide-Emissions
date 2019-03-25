const express = require('express');
const router = express.Router();

const Version = require('../models/version');
const Emission = require('../models/emission');
const Country = require('../models/country');

// TODO: Change API.
router.get('/', async function (req, res, next) {
  const version = await Version.findOne({ dirty: false }).sort({ _id: -1 });

  if (version == null) {
    res.send([]);
    return;
  }

  const fields = req.query.compact ? '_id code name income' : undefined;
  const rules = { version: version._id };

  if (req.query.codes) {
    rules.code = { $in: req.query.codes.split(',') };
  }

  var countries = await Country.find(rules, fields);
  console.log(countries);
  res.send(countries);
});

module.exports = router;
