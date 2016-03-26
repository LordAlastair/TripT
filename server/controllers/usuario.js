'use strict';

const models = require('../models');
const security = require('../config/security.json');
const jwt = require('jwt-simple');

module.exports = function(app) {
  var controller = {};

  controller.authenticate = function(req, res) {
    if (!req.body.usu_ds_email || !req.body.usu_ds_senha) {
      res.status(412).json({ message: 'Dados inválidos.' });
    } else {
      models
      .Usuario
      .findOne({
        where: {
          'usu_ds_email': req.body.usu_ds_email
        }
      })
      .then(function(usuario) {
        if (!usuario) {
          res.status(401).json({ message: 'Email não cadastrado.' });
        } else {
          usuario
          .comparePassword(req.body.usu_ds_senha)
          .then(function(matches) {
            if (!matches) {
              res.status(401).json({ message: 'Senha inválida.' });
            } else {
              res.json({ token: jwt.encode(usuario, security.secret) });
            }
          })
          .catch(function(err) {
            res.status(403).json(err);
          });
        }
      })
      .catch(function(err) {
        res.json(err);
      })
    }
  };

  controller.signup = function(req, res) {
    if (!req.body.usu_ds_email || !req.body.usu_ds_senha) {
      res.status(412).json({ message: 'Dados inválidos.' });
    } else {
      models
      .Usuario
      .create({
        usu_ds_email: req.body.usu_ds_email,
        usu_ds_senha: req.body.usu_ds_senha
      })
      .then(function(usuario) {
        res.status(201).json({ message: 'Usuário criado.' });
      })
      .catch(function(err) {
        res.status(500).json({ message: 'Usuário já existe.' });
      });
    }
  };

  return controller;
};
