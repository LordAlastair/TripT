'use strict';

module.exports = function (app) {
  const controller = app.controllers.van;

  app
  .route('/van')
  .get(controller.findAll)
  .post(controller.create);

  app
  .route('/van/:id')
  .get(controller.find);
};
