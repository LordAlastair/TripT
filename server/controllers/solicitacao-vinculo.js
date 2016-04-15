'use strict';
const models = require('../models');

module.exports = function(app) {
  var controller = {};

  controller.find = function(req, res) {
    models
      .SolicitacaoVinculo
      .findById(req.params.id)
      .then(function(solicitacaoVinculo) {
        res.json(solicitacaoVinculo);
      });
  };

  controller.findAll = function(req, res) {
    models
      .SolicitacaoVinculo
      .findAll()
      .then(function(solicitacaoVinculos) {
        res.json(solicitacaoVinculos);
      });
  };

  controller.create = function(req, res) {
    models
      .SolicitacaoVinculo
      .create(req.body)
      .then(function(solicitacaoVinculo) {
        res.json(solicitacaoVinculo);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  };

  controller.update = function(req, res) {
    models
      .SolicitacaoVinculo
      .update(req.body, {
        where: {
          sov_cd_solicitacao_vinculo: req.params.id
        }
      })
      .then(function(solicitacaoVinculo) {
        res.json(solicitacaoVinculo);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  };

  controller.delete = function(req, res) {
    models
      .SolicitacaoVinculo
      .delete(req.body, {
        where: {
          sov_cd_solicitacao_vinculo: req.params.id
        }
      })
      .then(function(solicitacaoVinculo) {
        res.json(solicitacaoVinculo);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  };

  return controller;
};