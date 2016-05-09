'use strict';
const models = require('../models');
const async = require('async');
const ResponseHandler = require('../helpers/response-handler');
const strings = require("../config/strings.json");

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
      models
      .FornecedorPlano
      .findAll({
        where: {
          fop_cd_fornecedor: fornecedor.for_cd_fornecedor
        }
      })
      .then(function(fornecedorPlano) {
        res.json(fornecedorPlano);
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
      .FornecedorPlano
      .findAll({
        where: {
          fop_cd_fornecedor: fornecedor.for_cd_fornecedor
        }
      })
      .then(function(fornecedorPlanos) {
        var existing = fornecedorPlanos.map(fornecedorPlano => fornecedorPlano.fop_cd_plano);

        req.body.checked =
          req.body.checked
          .filter(plano => !(existing.indexOf(plano.fop_cd_plano) !== -1))
          .map(plano => {
            plano.fop_cd_fornecedor = fornecedor.for_cd_fornecedor;
            return plano;
          });

        req.body.unchecked =
          req.body.unchecked
          .filter(plano => existing.indexOf(plano.fop_cd_plano) !== -1)
          .map(plano => plano.fop_cd_plano)

        async.parallel([
          function(cb) {
            models
            .FornecedorPlano
            .destroy({
              where: {
                fop_cd_fornecedor: fornecedor.for_cd_fornecedor,
                fop_cd_plano: {
                  $in: req.body.unchecked
                }
              }
            })
            .then(result => cb(null, result))
            .catch(error => cb(error, null));
          },
          function(cb) {
            models
            .FornecedorPlano
            .bulkCreate(req.body.checked)
            .then(result => cb(null, result))
            .catch(error => cb(error, null));
          },
        ], function(errors, results) {
          if (errors) {
            res.status(500).json(ResponseHandler.getErrorResponse(errors));
            return;
          }

          res.status(200).json(ResponseHandler.getResponse(strings["fornecedor-plano"].success.UPDATE_OK));
        });
      });
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
