'use strict';

module.exports = function (app) {
  const controller = app.controllers.bairro;

  app
  .route('/bairro')
  .get(controller.findAll);

  app
  .route('/bairro/:id')
  .get(controller.find);
};
