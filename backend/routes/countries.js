const express = require("express");
const router = express.Router();

const Version = require("../models/version");
const Country = require("../models/country");

const getVersion = async () => await Version.findOne({ dirty: false }).sort({ _id: -1 });

router.get("/", async function (req, res) {
  const version = await getVersion();
  const countries = version
    ? await Country.find({ version: version._id }, req.query.fields)
    : [];
  res.send(countries);
});

router.get("/:code", async function (req, res) {
  const version = await getVersion();
  const country = version
    ? await Country.findOne({ version: version._id, code: req.params.code }, req.query.fields)
    : null;
  country ? res.send(country) : res.sendStatus(404);
});

module.exports = router;
