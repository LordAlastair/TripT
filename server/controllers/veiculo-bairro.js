'use strict';
const models = require('../models');

module.exports = function (app) {
  var controller = {};

  controller.find = function(req, res) {
    models
    .VeiculoBairro
    .findById(req.params.id)
    .then(function(veiculoBairro) {
      res.json(veiculoBairro);
    });
  };

  controller.findAll = function(req, res) {
    models
    .VeiculoBairro
    .findAll()
    .then(function(veiculoBairros) {
      res.json(veiculoBairros);
    });
  };

  controller.create = function(req, res) {
    // TEST: curl -v -X POST http://$(docker-machine ip):3000/veiculoBairro -d '{ "veb_cd_rota": "1", "veb_cd_van": "120", "veb_cd_bairro": "30" }' -H "Content-Type: application/json"

    models
    .VeiculoBairro
    .create(req.body)
    .then(function(veiculoBairro) {
      res.json(veiculoBairro);
    })
    .catch(function(error) {
      res.status(500).json(error);
    });
  };

  controller.update = function(req, res) {
    //TEST: curl -v -X PUT -H 'Content-Type:application/json' -d '{ "veb_cd_van": "23", "veb_cd_bairro": "12" }' http://$(docker-machine ip):3000/veiculoBairro/1

    models
    .VeiculoBairro
    .update(req.body,{
      where: {
        veb_cd_veiculo_bairro: req.params.id
      }
    })
    .then(function(veiculoBairro) {
      res.json(veiculoBairro);
    })
    .catch(function(error) {
      res.status(500).json(error);
    });
  };


  return controller;
};
