'use strict';

module.exports = function (app) {
  const controller = app.controllers["veiculo-caracteristica"];

  app
  .route('/veiculoCaracteristica')
  .get(controller.findAll)
  .post(controller.create);

  app
  .route('/veiculoCaracteristica/:id')
  .get(controller.find)
  .put(controller.update);
};
