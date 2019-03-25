var config = require("./config");
var cookieParser = require("cookie-parser");
var express = require("express");
var history = require("connect-history-api-fallback");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

var countriesRouter = require("./routes/countries");
var countryRouter = require("./routes/country");

mongoose.set("useCreateIndex", true);

mongoose.connect(config.mongo.url, {
  useNewUrlParser: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

var app = express();

app.use(history());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/countries", countriesRouter);
app.use("/countries/:code", countryRouter);

var CronJob = require("cron").CronJob;
new CronJob(config.tasks.update.interval, require("./tasks/update"), null, true, null, null, config.tasks.update.runOnInit);
new CronJob(config.tasks.clear.interval, require("./tasks/clear"), null, true, null, null, config.tasks.clear.runOnInit);

module.exports = app;
