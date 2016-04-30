'use strict';
const models = require('../models');

module.exports = function (app) {
  var controller = {};

  controller.find = function(req, res) {
    models
    .Bairro
    .findById(req.params.id)
    .then(function(bairro) {
      if (bairro) {
        res.json(bairro);
      } else {
        res.status(404).send();
      }
    });
  };

  controller.findAll = function(req, res) {
    models
    .Bairro
    .findAll()
    .then(function(bairros) {
      res.json(bairros);
    });
  };

  return controller;
};
