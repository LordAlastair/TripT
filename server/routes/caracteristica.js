'use strict';

const express = require('express');

module.exports = function (app) {
  const controller = app.controllers.caracteristica;
  const router = express.Router();

  router.get('/', controller.findAll);
  router.get('/:id', controller.find);

  app.use('/caracteristica', router);
};
