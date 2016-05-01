'use strict';

const models = require('../models');
const strings = require("../config/strings.json");

module.exports = function (app) {
  var controller = {};
  controller.find = function(req, res) {
    models
    .Instituicao
    .findOne({
      where: {
        ins_cd_instituicao: req.query.ins_cd_instituicao
      }
    })
    .then(function(instituicao) {
      if (!instituicao) {
        res.status(404).end();
        return;
      }

      res.json(instituicao);
    });
  };

  controller.findAll = function(req, res) {
    models
    .Instituicao
    .findAll()
    .then(function(instituicoes) {
      res.json(instituicoes);
    });
  };

  controller.create = function(req, res) {
    req.body.ins_cd_instituicao = req.user.usu_cd_usuario;

    models
    .Instituicao
    .create(req.body)
    .then(function(instituicao) {
      res.status(201).json(instituicao);
    })
    .catch(function(error) {
      res.status(412).json(error);
    });
  };

  controller.update = function(req, res) {
    req.assert('ins_ds_instituicao', strings.instituicao.errors.CLI_DS_NOME).notEmpty();

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
    .Instituicao
    .update(req.body, {
      where: {
        ins_cd_instituicao: req.body.ins_cd_instituicao
      }
    })
    .then(function(instituicao) {
      res.json(instituicao);
    })
    .catch(function(error) {
      res.status(412).json(error);
    });
  };

  return controller;
};
