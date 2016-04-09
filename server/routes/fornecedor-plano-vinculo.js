'use strict';

const express = require('express');

module.exports = function (app) {
  const controller = app.controllers["fornecedor-plano-vinculo"];
  const router = express.Router();

  router.get('/', controller.findAll);
  router.post('/', controller.create);

  router.get('/:id', controller.find);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.delete);

  app.use('/fornecedor-plano-vinculo', router);
};
