var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var countriesRouter = require('./routes/countries');

var updateTask = require('./tasks/update');

mongoose.set('useCreateIndex', true);

// TODO: Move to config
var mongoDB = 'mongodb://127.0.0.1/emissions_v1';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/countries', countriesRouter);

(async () => {
  try {
    await updateTask();
    console.log("Updated.");
  } catch (e) {
    // Deal with the fact the chain failed
  }
})();

module.exports = app;