'use strict';

const express = require('express');
const passport = require('passport');

module.exports = function (app) {
  const controller = app.controllers.voto;
  const router = express.Router();

  router.post('/', controller.create);

  app.use('/voto', router);
};
