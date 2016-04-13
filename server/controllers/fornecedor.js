'use strict';

const models = require('../models');

module.exports = function (app) {
  var controller = {};

  controller.find = function(req, res) {
    models
    .Fornecedor
    .findById(req.params.id, {
      include: [
        { all: true }
      ]
    })
    .then(function(fornecedor) {
      if (!fornecedor) {
        res.status(404).end();
        return;
      }

      res.json(fornecedor);
    });
  };

  controller.findAll = function(req, res) {
    models
    .Fornecedor
    .findAll({
      include: [
        { all: true }
      ]
    })
    .then(function(fornecedors) {
      res.json(fornecedors);
    });
  };

  controller.create = function(req, res) {
    // TEST: curl -v -X POST http://$(docker-machine ip):3000/fornecedor -d '{ "vei_ds_placa": "ABC1234", "vei_ds_der": "102/50-01", "vei_qt_vagas": 30, "vei_ds_modelo": "Volkswagen", "vei_ds_cor": "rosa"}' -H "Content-Type: application/json"

    models
    .Fornecedor
    .create(req.body)
    .then(function(fornecedor) {
      res.status(201).json(fornecedor);
    })
    .catch(function(error) {
      res.status(412).json(error);
    });
  };

  controller.update = function(req, res) {
    //TEST: curl -v -X PUT -H 'Content-Type:application/json' -d '{ "for_cd_usuario": "1", "for_ds_pessoa": "Zézin", "for_ds_fantasia_nome": "Tio da van", "for_ds_celular": "27996334520", "for_ds_email": "tiovan@t.com"}' http://$(docker-machine ip):3000/fornecedor/1

    models
    .Fornecedor
    .update(req.body, {
      where: {
        vei_cd_fornecedor: req.params.id
      }
    })
    .then(function(fornecedor) {
      res.json(fornecedor);
    })
    .catch(function(error) {
      res.status(412).json(error);
    });
  };

  return controller;
};
