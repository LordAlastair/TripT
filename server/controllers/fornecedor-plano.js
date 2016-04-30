'use strict';
const models = require('../models');

module.exports = function(app) {
  var controller = {};

  controller.find = function(req, res) {
    models
      .FornecedorPlano
      .findById(req.params.id, {
        include: [
          { all: true }
        ]
      })
      .then(function(fornecedorPlano) {
        if(!fornecedorPlano){
          res.status(404).end();
          return;
        }
        res.json(fornecedorPlano);
      });
  };

  controller.findAll = function(req, res) {

    models
    .Fornecedor
    .findOne({
      where: {
        for_cd_usuario: req.user.usu_cd_usuario
      }
    })
    .then(function(fornecedor) {
      if (!fornecedor) {
        res.status(404).end();
        return;
      }

      models
      .FornecedorPlano
      .findAll({
        where: {
          fop_cd_fornecedor: fornecedor.for_cd_fornecedor
        }
      })
      .then(function(fornecedorPlano) {
        if (!fornecedorPlano){
          res.status(404).end();
          return;
        }
        res.json(fornecedorPlano);
      });
    });

  };

  controller.create = function(req, res) {
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
    models
      .FornecedorPlano
      .update(req.body, {
        where: {
          fop_cd_fornecedor_plano: req.params.id
        }
      })
      .then(function(fornecedorPlano) {
        if (!fornecedorPlano){
          res.status(404).end();
          return;
        }
        res.json(fornecedorPlano);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  };

  return controller;
};
