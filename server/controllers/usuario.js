'use strict';

const models = require('../models');
const strings = require("../config/strings.json");

const jwt = require('jwt-simple');
const security = require('../config/security.json');

module.exports = function(app) {
  var controller = {};

  function _validate(req) {
    req.assert('usu_ds_email', strings.usuario.signup.errors.EMAIL_REQUIRED).notEmpty();
    req.assert('usu_ds_senha', strings.usuario.signup.errors.PASSWORD_REQUIRED).notEmpty();
    req.assert('usu_ds_email', strings.usuario.signup.errors.INVALID_EMAIL_FORMAT).isEmail();

    return req.validationErrors();
  }

  controller.authenticate = function(req, res) {
    var errors = _validate(req);

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
        res.status(400).json([
          { msg: strings.usuario.authenticate.errors.EMAIL_NOT_FOUND }
        ]);
        return;
      }

      if (usuario.usu_ds_senha !== req.body.usu_ds_senha) {
        res.status(400).json([
          { msg: strings.usuario.authenticate.errors.INVALID_PASSWORD }
        ]);
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
    var errors = _validate(req);

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
      res.status(201).json([
        { msg: strings.usuario.signup.success.USER_CREATED }
      ]);
    })
    .catch(function(err) {
      res.status(500).json([
        { msg: strings.usuario.signup.errors.USER_ALREADY_EXISTS }
      ]);
    });
  };

  return controller;
};
