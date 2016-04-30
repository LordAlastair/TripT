'use strict';

const models = require('../models');
const strings = require("../config/strings.json");

module.exports = function (app) {
  var controller = {};
  controller.find = function(req, res) {

    models
    .Cliente
    .findOne({
      where: {
        cli_cd_usuario: req.user.usu_cd_usuario
      }
    })
    .then(function(cliente) {
      if (!cliente) {
        res.status(404).end();
        return;
      }

      res.json(cliente);
    });
  };

  controller.findAll = function(req, res) {
    models
    .Cliente
    .findAll({
      include: [
        { all: true }
      ]
    })
    .then(function(clientes) {
      res.json(clientes);
    });
  };

  controller.create = function(req, res) {
    // TEST: curl -v -X POST http://$(docker-machine ip):3000/cliente -d { "cli_cd_usuario": "1", "cli_ds_pessoa": "Zézin", "cli_ds_fantasia_nome": "Tio da van", "cli_ds_celular": "27996334520", "cli_ds_email": "tiovan@t.com"}' -H "Content-Type: application/json"
    req.body.cli_cd_usuario = req.user.usu_cd_usuario;

    models
    .Cliente
    .create(req.body)
    .then(function(cliente) {
      res.status(201).json(cliente);
    })
    .catch(function(error) {
      res.status(412).json(error);
    });
  };

  controller.update = function(req, res) {
    req.assert('cli_ds_nome', strings.cliente.errors.CLI_DS_NOME).notEmpty();

    var errors = req.validationErrors();

    if (errors) {
      res.status(412).json(errors);
      return;
    }

    if(!req.body.cli_cd_cliente){
      controller.create(req, res);
      return;
    }

    //TEST: curl -v -X PUT -H 'Content-Type:application/json' -d '{ "cli_cd_usuario": "1", "cli_ds_pessoa": "Zézin", "cli_ds_fantasia_nome": "Tio da van", "cli_ds_celular": "27996334520", "cli_ds_email": "tiovan@t.com"}' http://$(docker-machine ip):3000/cliente/1
    models
    .Cliente
    .update(req.body, {
      where: {
        cli_cd_usuario: req.user.usu_cd_usuario
      }
    })
    .then(function(cliente) {
      res.json(cliente);
    })
    .catch(function(error) {
      res.status(412).json(error);
    });
  };

  return controller;
};
