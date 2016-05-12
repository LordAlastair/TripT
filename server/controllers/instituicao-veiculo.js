'use strict';

const models = require('../models');
const async = require('async');
const ResponseHandler = require('../helpers/response-handler');
const strings = require("../config/strings.json");

module.exports = function (app) {
  var controller = {};
  controller.find = function(req, res) {
    models
    .InstituicaoVeiculo
    .findOne({
      where: {
        inv_cd_instituicao_veiculo: req.query.inv_cd_instituicao_veiculo
      }
    })
    .then(function(instituicaoVeiculo) {
      if (!instituicaoVeiculo) {
        res.status(404).end();
        return;
      }

      res.json(instituicaoVeiculo);
    });
  };

  controller.findAll = function(req, res) {
    models
    .Veiculo
    .findOne({
      where: {
        vei_cd_veiculo: req.veiculo.vei_cd_veiculo
      }
    })
    .then(function(instituicao) {
      models
      .InstituicaoVeiculo
      .findAll({
        where: {
          vei_cd_veiculo: instituicaoVeiculo.inv_cd_instituicao_veiculo
        }
      })
      .then(function(instituicaoVeiculo) {
        res.json(instituicaoVeiculo);
      });
    });
  };

  controller.create = function(req, res) {
     models
    .InstituicaoVeiculo
    .create(req.body)
    .then(function(instituicaoVeiculo) {
      res.status(201).json(instituicaoVeiculo);
    })
    .catch(function(error) {
      res.status(412).json(error);
    });
  };

  controller.update = function(req, res) {
    var errors = req.validationErrors();

    if (errors) {
      res.status(412).json(errors);
      return;
    }

    if(!req.body.ins_cd_instituicao){
      controller.create(req, res);
      return;
    }

    models
    .InstituicaoVeiculo
    .update(req.body, {
      where: {
        inv_cd_instituicao_veiculo: req.body.inv_cd_instituicao_veiculo
      }
    })
    .then(function(instituicaoVeiculo) {
      res.json(instituicaoVeiculo);
    })
    .catch(function(error) {
      res.status(412).json(error);
    });
  };
  
  controller.delete = function(req, res) {
    models
      .InstituicaoVeiculo
      .delete(req.body, {
        where: {
          inv_cd_instituicao_veiculo: req.params.id
        }
      })
      .then(function(instituicaoVeiculo) {
        res.json(instituicaoVeiculo);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  };

  return controller;
};