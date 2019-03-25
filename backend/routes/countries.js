const express = require("express");
const router = express.Router();

const Version = require("../models/version");
const Country = require("../models/country");

// TODO: Change API.
router.get("/", async function (req, res) {
  const version = await Version.findOne({ dirty: false }).sort({ _id: -1 });

  if (version == null) {
    res.send([]);
    return;
  }

  const fields = req.query.compact ? "_id code name income" : undefined;
  const rules = { version: version._id };

  if (req.query.codes) {
    rules.code = { $in: req.query.codes.split(",") };
  }

  res.send(await Country.find(rules, fields));
});

module.exports = router;
