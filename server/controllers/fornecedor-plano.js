'use strict';
const models = require('../models');

module.exports = function(app) {
  var controller = {};

  controller.find = function(req, res) {
    models
      .FornecedorPlano
      .findById(req.params.id)
      .then(function(fornecedorPlano) {
        res.json(fornecedorPlano);
      });
  };

  controller.findAll = function(req, res) {
    models
      .FornecedorPlano
      .findAll()
      .then(function(fornecedorPlano) {
        res.json(fornecedorPlano);
      });
  };

  controller.create = function(req, res) {
    // TEST: curl -v -X POST http://$(docker-machine ip):3000/veiculoCaracteristica -d '{ "vec_cd_veiculo": "1", "vec_cd_caracteristica": "1"}' -H "Content-Type: application/json"

    models
      .FornecedorPlano
      .create(req.body)
      .then(function(fornecedorPlano) {
        res.json(fornecedorPlano);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  };

  controller.update = function(req, res) {
    //TEST: curl -v -X PUT -H 'Content-Type:application/json' -d '{ "vec_cd_veiculo": "1", "vec_cd_caracteristica": "1" }' http://$(docker-machine ip):3000/veiculoCaracteristica/1

    models
      .FornecedorPlano
      .update(req.body, {
        where: {
          fop_cd_Fornecedor_plano: req.params.id
        }
      })
      .then(function(fornecedorPlano) {
        res.json(fornecedorPlano);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  };

  return controller;
};