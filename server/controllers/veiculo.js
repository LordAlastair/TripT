'use strict';
const models = require('../models');

module.exports = function (app) {
  var controller = {};

  controller.find = function(req, res) {
    models
    .Veiculo
    .findById(req.params.id)
    .then(function(veiculo) {
      res.json(veiculo);
    });
  };

  controller.findAll = function(req, res) {
    models
    .Veiculo
    .findAll()
    .then(function(veiculos) {
      res.json(veiculos);
    });
  };

  controller.create = function(req, res) {
    // TEST: curl -v -X POST http://localhost:3000/veiculo -d '{ "vei_ds_placa": "ABC1234", "vei_ds_der": "102/50-01", "vei_qt_vagas": 30, "vei_ds_modelo": "Volkswagen", "vei_ds_cor": "rosa"}' -H "Content-Type: application/json"

    models
    .Veiculo
    .create(req.body)
    .then(function(veiculo) {
      res.json(veiculo);
    })
    .catch(function(error) {
      res.status(500).json(error);
    });
  };

  controller.update = function(req, res) {
    //TEST: curl -v -X PUT -H 'Content-Type:application/json' -d '{ "vei_ds_placa": "ABC1234", "vei_ds_der": "33891505", "vei_qt_vagas": 2, "vei_ds_modelo": "coco", "vei_ds_cor": "desgraca"}' http://localhost:3000/veiculo/1

    models
    .Veiculo
    .update(req.body, {
      where: {
        vei_cd_veiculo: req.params.id
      }
    })
    .then(function(veiculo) {
      res.json(veiculo);
    })
    .catch(function(error) {
      res.status(500).json(error);
    });
  };


  return controller;
};
