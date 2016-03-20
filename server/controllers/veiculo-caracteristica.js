'use strict';
const models = require('../models');

module.exports = function (app) {
  var controller = {};

  controller.find = function(req, res) {
    models
    .VeiculoCaracteristica
    .findById(req.params.id)
    .then(function(veiculoCaracteristica) {
      res.json(veiculoCaracteristica);
    });
  };

  controller.findAll = function(req, res) {
    models
    .VeiculoCaracteristica
    .findAll()
    .then(function(veiculoCaracteristicas) {
      res.json(veiculoCaracteristicas);
    });
  };

  controller.create = function(req, res) {
    // TEST: curl -v -X POST http://$(docker-machine ip):3000/veiculoCaracteristica -d '{ "vec_cd_veiculo": "1", "vec_cd_caracteristica": "1"}' -H "Content-Type: application/json"

    models
    .VeiculoCaracteristica
    .create(req.body)
    .then(function(veiculoCaracteristica) {
      res.json(veiculoCaracteristica);
    })
    .catch(function(error) {
      res.status(500).json(error);
    });
  };

  controller.update = function(req, res) {
    //TEST: curl -v -X PUT -H 'Content-Type:application/json' -d '{ "vec_cd_veiculo": "1", "vec_cd_caracteristica": "1" }' http://$(docker-machine ip):3000/veiculoCaracteristica/1

    models
    .VeiculoCaracteristica
    .update(req.body,{
      where: {
        vec_cd_veiculo_caracteristica: req.params.id
      }
    })
    .then(function(veiculoCaracteristica) {
      res.json(veiculoCaracteristica);
    })
    .catch(function(error) {
      res.status(500).json(error);
    });
  };


  return controller;
};
