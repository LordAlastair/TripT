'use strict';

const models = require('../models');
const security = require('../config/security.json');
const jwt = require('jwt-simple');

module.exports = function(app) {
  var controller = {};

  controller.authenticate = function(req, res) {
    if (!req.body.usu_ds_email || !req.body.usu_ds_senha) {
      res.status(500).json({ message: 'Dados inválidos.' });
      return;
    }

    models
    .Usuario
    .findOne({
      where: {
        'usu_ds_email': req.body.usu_ds_email
      }
    })
    .then(function(usuario) {
      usuario
      .comparePassword(req.body.usu_ds_senha)
      .then(function(match) {
        var token = jwt.encode(usuario, security.secret);

        res.json({
          token: "JWT " + token
        });
      })
      .catch(function(err) {
        res.status(403).json(err);
      });
    })
    .catch(function(err) {
      res.json(err);
    })
  };

  controller.signup = function(req, res) {
    if (!req.body.usu_ds_email || !req.body.usu_ds_senha) {
      res.status(500).json({ message: 'Dados inválidos.' });
      return;
    }

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
  };

  return controller;
};
