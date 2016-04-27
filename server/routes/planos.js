'use strict';

const express = require('express');

module.exports = function (app) {
  const controller = app.controllers.planos;
  const router = express.Router();

  router.get('/', controller.findAll);

  app.use('/planos', router)
};
