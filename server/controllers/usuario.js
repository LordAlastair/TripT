'use strict';

const models = require('../models');

module.exports = function(app) {
  var controller = {};

  controller.authenticate = function(req, res) {

  };

  controller.signup = function(req, res) {
    if (!req.body.usu_ds_email || !req.body.usu_ds_senha) {
      res.status(500).json({ message: 'Dados inválidos.' });
    } else {
      models
      .Usuario
      .create({
        usu_ds_email: req.body.usu_ds_email,
        usu_ds_senha: req.body.usu_ds_senha
      })
      .then(function(usuario) {
        res.json({ message: 'Usuário criado.' });
      })
      .catch(function(err) {
        res.status(500).json({ message: 'Usuário já existe.' });
      });
    }
  };

  return controller;
};
