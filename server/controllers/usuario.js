'use strict';

const generator = require('generate-password');
const nodemailer = require('nodemailer');

const models = require('../models');
const strings = require("../config/strings.json");
const ResponseHandler = require('../helpers/response-handler');

module.exports = function(app) {
  var controller = {};

  controller.authenticate = function(req, res) {
    req.assert('usu_ds_email', strings.usuario.errors.EMAIL_REQUIRED).notEmpty();
    req.assert('usu_ds_senha', strings.usuario.errors.PASSWORD_REQUIRED).notEmpty();
    req.assert('usu_ds_email', strings.usuario.errors.INVALID_EMAIL_FORMAT).isEmail();

    var errors = req.validationErrors();

    if (errors) {
      res.status(412).json(errors);
      return;
    }

    models
    .Usuario
    .findOne({
      where: { usu_ds_email: req.body.usu_ds_email }
    })
    .then(function(usuario) {
      if (!usuario) {
        res.status(400).json(ResponseHandler.getErrorResponse(strings.usuario.errors.EMAIL_NOT_FOUND));
        return;
      }

      if (usuario.usu_ds_senha !== req.body.usu_ds_senha) {
        res.status(400).json(ResponseHandler.getErrorResponse(strings.usuario.errors.INVALID_PASSWORD));
        return;
      }

      res.status(200).json(ResponseHandler.getTokenResponse(usuario));
    })
    .catch(function(err) {
      res.status(500).json(ResponseHandler.getErrorResponse(strings.usuario.errors.CANT_FIND_USER), err);
    });
  };

  controller.signup = function(req, res) {
    req.assert('usu_ds_email', strings.usuario.errors.EMAIL_REQUIRED).notEmpty();
    req.assert('usu_ds_senha', strings.usuario.errors.PASSWORD_REQUIRED).notEmpty();
    req.assert('usu_ds_email', strings.usuario.errors.INVALID_EMAIL_FORMAT).isEmail();

    var errors = req.validationErrors();

    if (errors) {
      res.status(412).json(errors);
      return;
    }

    var usuario = {
      usu_ds_email: req.body.usu_ds_email,
      usu_ds_senha: req.body.usu_ds_senha
    };

    models
    .Usuario
    .create(usuario)
    .then(function(usuario) {
      models
      .Auditoria
      .create({
        aud_ds_tabela: "Usuario",
        aud_ds_alteracao: strings.usuario.success.USER_CREATED,
        aud_cd_usuario: 0,
        aud_ts_modificacao: new Date(),
        aud_ds_modificacao: JSON.stringify(usuario)
      })
      .then(function(auditoria) {
        console.log("Auditoria de usuário criado.");
      })
      .catch(function(error) {
        console.log(error);
      });

      res.status(201).json(ResponseHandler.getResponse(strings.usuario.success.USER_CREATED));
    })
    .catch(function(err) {
      res.status(500).json(ResponseHandler.getErrorResponse(strings.usuario.errors.USER_ALREADY_EXISTS, err));
    });
  };

  controller.recovery = function(req, res){
    // TEST => curl -v -X POST http://localhost:3000/usuario/recovery -d '{ "usu_ds_email": "shayron.aguiar@gmail.com" }' -H "Content-Type: application/json"

    req.assert('usu_ds_email', strings.usuario.errors.EMAIL_REQUIRED).notEmpty();
    req.assert('usu_ds_email', strings.usuario.errors.INVALID_EMAIL_FORMAT).isEmail();

    var errors = req.validationErrors();

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
        res.status(404).json(ResponseHandler.getErrorResponse(strings.usuario.errors.EMAIL_NOT_FOUND));
        return;
      }

      var newPassword = generator.generate({
        length: 8,
        numbers: true
      });

      models
      .Usuario
      .update({
        usu_ds_senha: newPassword
      }, {
        where: {
          usu_ds_email: usuario.usu_ds_email
        }
      })
      .then(function(usuario) {
        var transporter = nodemailer.createTransport('smtps://vali.develop%40gmail.com:vali2016@smtp.gmail.com');

        var mailOptions = {
          from: '"Tript" <vali.develop@gmail.com>',
          to: req.body.usu_ds_email,
          subject: 'TripT - Recuperação de senha',
          html: `<b>Sua nova senha gerada pelo sistema:</b> ${newPassword}`
        };

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            res.status(500).json(ResponseHandler.getErrorResponse(strings.usuario.errors.CANT_SEND_EMAIL, error));
            return;
          }

          res.status(200).json(ResponseHandler.getResponse(strings.usuario.success.PASSWORD_RECOVERY))
        });
      })
      .catch(function(error) {
        res.status(500).json(ResponseHandler.getErrorResponse(strings.usuario.errors.CANT_UPDATE_USER, error));
      });
    })
    .catch(function(error) {
      res.status(500).json(ResponseHandler.getErrorResponse(strings.usuario.errors.CANT_FIND_USER, error));
    });
  }

  controller.changepass = function(req, res){
    //TEST =>   curl -v -X POST http://localhost:3000/usuario/changepass -d '{ "usu_ds_email": "shayron.aguiar@gmail.com", "usu_ds_senha": "123456", "usu_ds_nova_senha": "123senhanova456" }' -H "Content-Type: application/json"

    req.assert('usu_ds_email', strings.usuario.errors.EMAIL_REQUIRED).notEmpty();
    req.assert('usu_ds_email', strings.usuario.errors.INVALID_EMAIL_FORMAT).isEmail();

    var errors = req.validationErrors();

    if (errors) {
      res.status(412).json(errors);
      return;
    }

    models
    .Usuario
    .findOne({
      where: { usu_ds_email: req.body.usu_ds_email }
    })
    .then(function(usuario) {
      if (!usuario) {
        res.status(400).json(ResponseHandler.getErrorResponse(strings.usuario.errors.EMAIL_NOT_FOUND));
        return;
      }

      if (usuario.usu_ds_senha !== req.body.usu_ds_senha) {
        res.status(400).json(ResponseHandler.getErrorResponse(strings.usuario.errors.INVALID_PASSWORD));
        return;
      }

      models
      .Usuario
      .update({
        usu_ds_senha: req.body.usu_ds_nova_senha
      },{
        where: { usu_ds_email: req.body.usu_ds_email }
      })
      .then(function() {
        res.status(200).json(ResponseHandler.getResponse(strings.usuario.success.PASSWORD_CHANGED));
      })
      .catch(function(error) {
        res.status(500).json(ResponseHandler.getErrorResponse(strings.usuario.errors.CANT_CHANGE_PASSWORD, error));
      });
    })
    .catch(function(error) {
      res.status(500).json(ResponseHandler.getErrorResponse(strings.usuario.errors.CANT_FIND_USER, error));
    })
  }

  return controller;
};
