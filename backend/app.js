const config = require("./config");
const cookieParser = require("cookie-parser");
const express = require("express");
const history = require("connect-history-api-fallback");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

mongoose.set("useCreateIndex", true);

mongoose.connect(config.mongo.url, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

const app = express();

app.use(history());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/countries", require("./routes/countries"));

const CronJob = require("cron").CronJob;
new CronJob(config.tasks.update.interval, require("./tasks/update"), null, true, null, null, config.tasks.update.runOnInit);
new CronJob(config.tasks.clear.interval, require("./tasks/clear"), null, true, null, null, config.tasks.clear.runOnInit);

module.exports = app;
