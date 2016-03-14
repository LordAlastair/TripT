'use strict';
const models = require('../models');

module.exports = function (app) {
  var controller = {};

  controller.find = function(req, res) {
    models.Caracteristica.findById(req.params.id).then(function(caracteristica) {
      res.json(caracteristica);
    });
  };

  controller.findAll = function(req, res) {
    models.Caracteristica.findAll().then(function(caracteristica) {
      res.json(caracteristica);
    });
  };

  return controller;
};
