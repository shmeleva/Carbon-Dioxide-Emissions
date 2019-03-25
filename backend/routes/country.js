const express = require("express");
const router = express.Router({ mergeParams: true });

const Version = require("../models/version");
const Country = require("../models/country");

router.get("/", async function (req, res) {
  const version = await Version.findOne({ dirty: false }).sort({ _id: -1 });
  const country = version
    ? await Country.findOne({ version: version._id, code: req.params.code }, req.query.fields)
    : null;
  res.send(country);
});

module.exports = router;
