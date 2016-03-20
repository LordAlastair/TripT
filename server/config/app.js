const methodOverride = require('method-override');
const bodyParser  = require('body-parser');
const consign = require('consign');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

consign()
.include('controllers')
.then('routes')
.into(app)

module.exports = app;
