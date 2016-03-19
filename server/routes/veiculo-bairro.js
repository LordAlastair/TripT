'use strict';

module.exports = function (app) {
  const controller = app.controllers["veiculo-bairro"];

  app
  .route('/veiculoBairro')
  .get(controller.findAll)
  .post(controller.create);

  app
  .route('/veiculoBairro/:id')
  .get(controller.find)
  .put(controller.update);
};
