'use strict';

const models = require('../models');


module.exports = function(){
  controller.findAll = function(req, res) {
    models
    .Planos
    .findAll({ include: [{ all: true }]})
    .then(function(planos) {
      res.json(planos);
    });
  };
}
