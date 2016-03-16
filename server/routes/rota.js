'use strict';

module.exports = function (app) {
  const controller = app.controllers.rota;

  app
  .route('/rota')
  .get(controller.findAll)
  .post(controller.create);

  app
  .route('/rota/:id')
  .get(controller.find)
  .put(controller.update);
};
