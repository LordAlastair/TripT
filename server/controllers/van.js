'use strict';
const models = require('../models');

module.exports = function (app) {
  var controller = {};

  controller.find = function(req, res) {
    models
    .Van
    .findById(req.params.id)
    .then(function(van) {
      res.json(van);
    });
  };

  controller.findAll = function(req, res) {
    models
    .Van
    .findAll()
    .then(function(vans) {
      res.json(vans);
    });
  };

  controller.create = function(req, res) {
    // TEST: curl -v -X POST http://localhost:3000/van -d '{ "van_ds_placa": "ABC1234", "van_ds_der": "102/50-01", "van_qt_vagas": 30, "van_ds_modelo": "Volkswagen", "van_ds_cor": "rosa"}' -H "Content-Type: application/json"

    models
    .Van
    .create(req.body)
    .then(function(van) {
      res.json(van);
    })
    .catch(function(error) {
      res.status(500).json(error);
    });
  };

  return controller;
};
