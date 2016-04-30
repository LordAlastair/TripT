'use strict';

const express = require('express');
const passport = require('passport');

module.exports = function (app) {
  const controller = app.controllers["fornecedor-plano"];
  const router = express.Router();

  router.use(passport.authenticate('jwt', { session: false }));

  router.get('/', controller.findAll);
  router.post('/', controller.create);

  router.get('/:id', controller.find);
  router.put('/:id', controller.update);

  app.use('/fornecedor-plano', router);
};
