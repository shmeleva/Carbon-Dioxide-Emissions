const express = require("express");
const router = express.Router();

const Version = require("../models/version");
const Country = require("../models/country");

router.get("/", async function (req, res) {
  const version = await Version.findOne({ dirty: false }).sort({ _id: -1 });
  const countries = version
    ? await Country.find({ version: version._id }, req.query.fields)
    : [];
  res.send(countries);
});

module.exports = router;
