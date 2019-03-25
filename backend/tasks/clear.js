'use strict'

const _ = require("lodash");

const Version = require("../models/version");
const Country = require("../models/country");

const clear = async function () {
    console.log("Cleaning started...");
    try {
        var version = await Version.findOne({ dirty: false }).sort({ _id: -1 });
        if (version == null) {
            return;
        }

        var oldVersions = await Version.find({
            _id: { $ne: version._id },
            dirty: false
        }, "_id");
        var oldVersionIds = _.map(oldVersions, "_id");

        await Country.deleteMany({ version: { $in: oldVersionIds } });
        await Version.deleteMany({ _id: { $in: oldVersionIds } });

        console.log("Cleaning completed:");
    } catch (error) {
        console.error(error);
    }
}

module.exports = clear;