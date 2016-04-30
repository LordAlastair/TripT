'use strict';

const models = require('../models');


module.exports = function (app) {
  var controller = {};

  controller.findAll = function(req, res) {
    models
    .Planos
    .findAll({ include: [{ all: true }]})
    .then(function(planos) {
      res.json(planos);
    });
  };

  return controller;
}
