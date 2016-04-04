'use strict';

const jwt = require('jwt-simple');
const models = require('../models');
const security = require('../config/security.json');

module.exports = function(app) {
  var controller = {};

  function _validateRequest(req) {
    req.assert('usu_ds_email', 'Email é obrigatório.').notEmpty();
    req.assert('usu_ds_senha', 'Senha é obrigatória.').notEmpty();
    req.assert('usu_ds_email', `Formato do email (${req.body.usu_ds_email}) é inválido.`).isEmail();
    req.assert('usu_ds_senha', 'Senha deve ter entre 6 e 20 caractéres.').len(6, 20);

    return req.validationErrors();
  }

  controller.authenticate = function(req, res) {
    var errors = _validateRequest(req);

    if (errors) {
      res.status(412).json(errors);
      return;
    }

    models
    .Usuario
    .findOne({
      where: { 'usu_ds_email': req.body.usu_ds_email }
    })
    .then(function(usuario) {
      if (!usuario) {
        res.status(401).json({ message: 'Email não cadastrado.' });
        return;
      }

      if (usuario.usu_ds_senha !== req.body.usu_ds_senha) {
        res.status(401).json({ message: 'Senha inválida.' });
        return;
      }

      res.json({
        token: "JWT " + jwt.encode(usuario, security.secret)
      });
    })
    .catch(function(err) {
      res.json(err);
    })
  };

  controller.signup = function(req, res) {
    var errors = _validateRequest(req);

    if (errors) {
      res.status(412).json(errors);
      return;
    }

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
  };

  return controller;
};
