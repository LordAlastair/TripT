'use strict';

module.exports = function (app) {
	const controller = app.controllers.van;

  app
  .route('/van')
  .get(controller.get);
};
