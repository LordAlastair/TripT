'use strict';

const express = require('express');
const passport = require('passport');

module.exports = function (app) {
  const controller = app.controllers.usuario;
  const router = express.Router();

  var auth = passport.authenticate('jwt', { session: false });

  router.post('/authenticate', controller.authenticate);
  router.post('/signup', controller.signup);
  router.post('/recovery', controller.recovery);

  router.post('/changepass', auth, controller.changepass);
  router.delete('/', auth, controller.delete);

  app.use('/usuario', router);
};
