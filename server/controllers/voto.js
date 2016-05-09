'use strict';

const models = require('../models');
const strings = require("../config/strings.json");

module.exports = function (app) {
  var controller = {};

  controller.create = function(req, res) {
    console.log(req.body);
    models
    .Voto
    .create(req.body)
    .then(function(voto) {
      res.status(201).json(voto);
    })
    .catch(function(error) {
      res.status(412).json(error);
    });
  };

  return controller;
};
