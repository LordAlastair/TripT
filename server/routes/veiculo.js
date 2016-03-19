'use strict';

module.exports = function (app) {
  const controller = app.controllers.veiculo;

  app
  .route('/veiculo')
  .get(controller.findAll)
  .post(controller.create);

  app
  .route('/veiculo/:id')
  .get(controller.find)
  .put(controller.update);
};
