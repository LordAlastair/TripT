'use strict';

const express = require('express');
const passport = require('passport');

module.exports = function (app) {
  const controller = app.controllers.fornecedor;
  const router = express.Router();

  /** exige que tenha o header Authorization na requisição */
  router.use(passport.authenticate('jwt', { session: false }));

  router.get('/:', controller.find);
  router.put('/', controller.update);

  router.post('/', controller.create);

  app.use('/fornecedor', router)
};
