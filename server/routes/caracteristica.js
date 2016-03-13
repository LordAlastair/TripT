'use strict';

module.exports = function (app) {
	const controller = app.controllers.caracteristica;

  app
  .route('/caracteristica')
  .get(controller.findAll);

	app
	.route('/caracteristica/:id')
	.get(controller.find);
};
