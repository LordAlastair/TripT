'use strict';

const models = require('../models');

module.exports = function (app) {
  var controller = {};

  controller.find = function(req, res) {
    models
    .Veiculo
    .findById(req.params.id, {
      include: [
        { all: true }
      ]
    })
    .then(function(veiculo) {
      if (!veiculo) {
        res.status(404).end();
        return;
      }

      res.json(veiculo);
    });
  };

  controller.findAll = function(req, res) {
    models
    .Veiculo
    .findAll({
      include: [
        { all: true }
      ]
    })
    .then(function(veiculos) {
      res.json(veiculos);
    });
  };

  controller.create = function(req, res) {
    // TEST: curl -v -X POST http://$(docker-machine ip):3000/veiculo -d '{ "vei_ds_placa": "ABC1234", "vei_ds_der": "102/50-01", "vei_qt_vagas": 30, "vei_ds_modelo": "Volkswagen", "vei_ds_cor": "rosa"}' -H "Content-Type: application/json"

    models
    .Veiculo
    .create(req.body)
    .then(function(veiculo) {
      res.status(201).json(veiculo);
    })
    .catch(function(error) {
      res.status(412).json(error);
    });
  };

  controller.update = function(req, res) {
    //TEST: curl -v -X PUT -H 'Content-Type:application/json' -d '{ "vei_ds_placa": "ABC1234", "vei_ds_der": "33891505", "vei_qt_vagas": 2, "vei_ds_modelo": "coco", "vei_ds_cor": "desgraca"}' http://$(docker-machine ip):3000/veiculo/1

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
      res.status(412).json(error);
    });
  };


  return controller;
};
