const methodOverride = require('method-override');
const bodyParser  = require('body-parser');
const consign = require('consign');
const express = require('express');
const expressValidator = require('express-validator');
const app = express();

const passport = require('passport');
require('../config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(methodOverride());
app.use(passport.initialize());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');

  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});

consign()
.include('controllers')
.then('routes')
.into(app);

module.exports = app;
