'use strict';
const models = require('../models');

module.exports = function(app) {
  var controller = {};

  controller.find = function(req, res) {
    models
      .FornecedorPlanoVinculo
      .findById(req.params.id)
      .then(function(fornecedorPlanoVinculo) {
        res.json(fornecedorPlanoVinculo);
      });
  };

  controller.findAll = function(req, res) {
    models
      .FornecedorPlanoVinculo
      .findAll()
      .then(function(fornecedorPlanoVinculos) {
        res.json(fornecedorPlanoVinculos);
      });
  };

  controller.create = function(req, res) {
    models
      .FornecedorPlanoVinculo
      .create(req.body)
      .then(function(fornecedorPlanoVinculo) {
        res.json(fornecedorPlanoVinculo);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  };

  controller.update = function(req, res) {
    models
      .FornecedorPlanoVinculo
      .update(req.body, {
        where: {
          fpv_cd_vinculo: req.params.id
        }
      })
      .then(function(fornecedorPlanoVinculo) {
        res.json(fornecedorPlanoVinculo);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  };

  controller.delete = function(req, res) {
    models
      .FornecedorPlanoVinculo
      .delete(req.body, {
        where: {
          fpv_cd_vinculo: req.params.id
        }
      })
      .then(function(fornecedorPlanoVinculo) {
        res.json(fornecedorPlanoVinculo);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  };

  return controller;
};