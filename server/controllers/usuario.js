'use strict';

const models = require('../models');
const strings = require("../config/strings.json");

const generator = require('generate-password');
const nodemailer = require('nodemailer');
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

  controller.recovery = function(req, res){
    // TEST => curl -v -X POST http://localhost:3000/usuario/recovery -d '{ "usu_ds_email": "shayron.aguiar@gmail.com" }' -H "Content-Type: application/json"

    req.assert('usu_ds_email', strings.usuario.recovery.errors.INVALID_EMAIL_FORMAT).isEmail();

    var errors = req.validationErrors();
    if(errors){
      res.status(412).json(errors);
      return;
    }

    models
    .Usuario
    .findOne({
      where: { 'usu_ds_email': req.body.usu_ds_email }
    })
    .then(function(usuario) {

      if(!usuario){
        res.status(404).json([{
          msg: strings.usuario.recovery.errors.EMAIL_NOT_FOUND
        }]);
        return;
      }

      var newPassword = generator.generate({
        length: 5,
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
          from: '"Tript 👥" <vali.develop@gmail.com>', // sender address
          to: usuario.usu_ds_email, // list of receivers
          subject: 'TripT - Recuperação de senha ✔', // Subject line
          text: 'Hello TESTER world 🐴', // plaintext body
          html: '<b>Sua nova senha gerada pelo sistema 🐴</b>'+newPassword // html body
        };

        transporter.sendMail(mailOptions, function(error, info){
          if(error){
            return res.send(error);
          }
          res.send('Message sent: ' + info.response);
        });
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
  }

  return controller;
};
