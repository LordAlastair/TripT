'use strict';

const express = require('express');

module.exports = function (app) {
  const controller = app.controllers["veiculo-bairro"];
  const router = express.Router();

  router.get('/', controller.findAll);
  router.post('/', controller.create);

  router.get('/:id', controller.find);
  router.put('/:id', controller.update);

  app.use('/veiculo-bairro', router);
};
