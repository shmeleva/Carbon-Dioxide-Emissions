var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var countriesRouter = require('./routes/countries');

var downloadTask = require('./tasks/update');

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
    var text = await downloadTask("http://api.worldbank.org/v2/en/indicator/EN.ATM.CO2E.KT");
    console.log(text);
  } catch (e) {
    // Deal with the fact the chain failed
  }
})();

module.exports = app;