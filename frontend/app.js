const express = require("express");
const history = require("connect-history-api-fallback");
const logger = require("morgan");
const path = require("path");
const proxy = require('http-proxy-middleware')

const app = express();

app.use(history());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, "dist")));
app.use('/', proxy({ target: "https://carbon-dioxide-emissions.herokuapp.com", changeOrigin: true }))

const port = process.env.PORT || 8000;
app.listen(port);

module.exports = app;
