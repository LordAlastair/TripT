'use strict';

const models = require('../models');


module.exports = function (app) {
  var controller = {};

  controller.findAll = function(req, res) {
    models
    .Planos
    .findAll({ include: [{ all: true }]})
    .then(function(pagamentos) {
      res.json(pagamentos);
    });
  };

  return controller;
}
