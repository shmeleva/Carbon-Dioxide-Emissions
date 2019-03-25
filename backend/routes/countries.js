const express = require('express');
const router = express.Router();

const Version = require('../models/version');
const Emission = require('../models/emission');
const Country = require('../models/country');

router.get('/', async function (req, res, next) {
  const version = await Version.findOne({ valid: true }).sort({ _id: -1 });
  const fields = req.query.compact ? '_id code name income' : undefined;
  const rules = { version: version._id };

  if (req.query.codes) {
    rules.code = { $in: req.query.codes.split(',') };
  }

  res.send(await Country.find(rules, fields));
});

module.exports = router;
