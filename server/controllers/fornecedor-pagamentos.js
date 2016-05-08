'use strict';
const models = require('../models');
const async = require('async');
const ResponseHandler = require('../helpers/response-handler');
const strings = require("../config/strings.json");

module.exports = function(app) {
  var controller = {};

  controller.find = function(req, res) {
    models
      .FornecedorPagamentos
      .findById(req.params.id, {
        include: [
          { all: true }
        ]
      })
      .then(function(fornecedorPagamentos) {
        if(!fornecedorPagamentos){
          res.status(404).end();
          return;
        }
        res.json(fornecedorPagamentos);
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
      models
      .FornecedorPagamentos
      .findAll({
        where: {
          fpg_cd_fornecedor: fornecedor.for_cd_fornecedor
        }
      })
      .then(function(fornecedorPagamentos) {
        res.json(fornecedorPagamentos);
      });
    });
  };

  controller.create = function(req, res) {
    models
    .Fornecedor
    .findOne({
      where: {
        for_cd_usuario: req.user.usu_cd_usuario
      }
    })
    .then(function(fornecedor) {
      models
      .FornecedorPagamentos
      .findAll({
        where: {
          fpg_cd_fornecedor: fornecedor.for_cd_fornecedor
        }
      })
      .then(function(fornecedorPagamentos) {
        var existing = fornecedorPagamentos.map(fornecedorPagamentos => fornecedorPagamentos.fpg_cd_pagamento);

        req.body.checked =
          req.body.checked
          .filter(pagamento => !(existing.indexOf(pagamento.fpg_cd_pagamento) !== -1))
          .map(pagamento => {
            pagamento.fpg_cd_fornecedor = fornecedor.for_cd_fornecedor;
            return pagamento;
          });

        req.body.unchecked =
          req.body.unchecked
          .filter(pagamento => existing.indexOf(pagamento.fpg_cd_pagamento) !== -1)
          .map(pagamento => pagamento.fpg_cd_pagamento)

        async.parallel([
          function(cb) {
            models
            .FornecedorPagamentos
            .bulkCreate(req.body.checked)
            .then(result => cb(null, result))
            .catch(error => cb(error, null));
          },
          function(cb) {
            models
            .FornecedorPagamentos
            .destroy({
              where: {
                fpg_cd_fornecedor: fornecedor.for_cd_fornecedor,
                fpg_cd_pagamento: {
                  $in: req.body.unchecked
                }
              }
            })
            .then(result => cb(null, result))
            .catch(error => cb(error, null));
          }
        ], function(errors, results) {
          if (errors) {
            res.status(500).json(ResponseHandler.getErrorResponse(errors));
            return;
          }

          res.status(200).json(ResponseHandler.getResponse(strings["fornecedor-pagamentos"].success.UPDATE_OK));
        });
      });
    });
  };

  controller.update = function(req, res) {
    models
      .FornecedorPagamentos
      .update(req.body, {
        where: {
          fpg_cd_fornecedor_pagamentos: req.params.id
        }
      })
      .then(function(FornecedorPagamentos) {
        if (!fornecedorPagamentos){
          res.status(404).end();
          return;
        }
        res.json(fornecedorPagamentos);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  };

  return controller;
};
