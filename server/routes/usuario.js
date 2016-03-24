'use strict';

module.exports = function (app) {
  const controller = app.controllers.usuario;

  app
  .route('/authenticate')
  .post(controller.authenticate);

  app
  .route('/signup')
  .put(controller.signup);
};
