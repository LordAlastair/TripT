'use strict';

const models = require('../models');
const strings = require("../config/strings.json");

const ResponseHandler = require('../helpers/response-handler');

module.exports = function (app) {
  var controller = {};

  controller.find = function(req, res) {
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
    .then(function(fornecedores) {
      res.json(fornecedores);
    });
  };

  controller.create = function(req, res) {
    // TEST: curl -v -X POST http://$(docker-machine ip):3000/fornecedor -d { "for_cd_usuario": "1", "for_ds_pessoa": "Zézin", "for_ds_fantasia_nome": "Tio da van", "for_ds_celular": "27996334520", "for_ds_email": "tiovan@t.com"}' -H "Content-Type: application/json"
    req.body.for_cd_usuario = req.user.usu_cd_usuario;
    
    models
    .Fornecedor
    .create(req.body)
    .then(function(fornecedor) {
      res.status(201).json(fornecedor);
    })
    .catch(function(error) {
      res.status(412).json(ResponseHandler.getErrorResponse(strings.fornecedor.errors.CANT_CREATE_FORNECEDOR), error);
    });
  };

  controller.update = function(req, res) {
    req.assert('for_fl_pessoa', strings.fornecedor.errors.FOR_FL_PESSOA_REQUIRED).notEmpty();
    req.assert('for_ds_fantasia_nome', strings.fornecedor.errors.FOR_DS_FANTASIA_NOME_REQUIRED).notEmpty();
    req.assert('for_ds_celular', strings.fornecedor.errors.FOR_DS_CELULAR_REQUIRED).notEmpty();
    req.assert('for_cd_transporte', strings.fornecedor.errors.FOR_CD_TRANSPORTE_REQUIRED).notEmpty();

    var errors = req.validationErrors();

    if (errors) {
      res.status(412).json(errors);
      return;
    }

    if(!req.body.for_cd_fornecedor){
      controller.create(req, res);
      return;
    }

    models
    .Fornecedor
    .update(req.body, {
      where: {
        for_cd_usuario: req.user.usu_cd_usuario
      }
    })
    .then(function(fornecedor) {
      res.json(fornecedor);
    })
    .catch(function(error) {
      res.status(412).json(ResponseHandler.getErrorResponse(error));
    });
  };

  return controller;
};
