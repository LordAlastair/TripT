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
    .findById(req.params.id, {include : [{all:true}]} )
    .then(function(veiculoBairro) {
      if (veiculoBairro) {
        res.json(veiculoBairro);
      } else {
        res.status(404).send();
      }
    });
  };
  
  controller.findAll = function(req, res) {
    models
    .InstituicaoVeiculo
    .findAll({ include: [{ all: true }]})
    .then(function(instituicaoVeiculo) {
      res.json(instituicaoVeiculo);
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