'use strict';

const express = require('express');
const passport = require('passport');

module.exports = function (app) {
  const controller = app.controllers.veiculo;
  const router = express.Router();

  router.get('/', controller.search);

  app.use('/search', router);
};
