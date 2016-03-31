'use strict';

const express = require('express');

module.exports = function (app) {
  const controller = app.controllers.usuario;
  const router = express.Router();

  router.post('/authenticate', controller.authenticate);
  router.post('/signup', controller.signup);

  app.use('/usuario', router);
};
