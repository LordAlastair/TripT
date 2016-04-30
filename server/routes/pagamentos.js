'use strict';

const express = require('express');

module.exports = function (app) {
  const controller = app.controllers.pagamentos;
  const router = express.Router();

  router.get('/', controller.findAll);

  app.use('/pagamentos', router)
};
