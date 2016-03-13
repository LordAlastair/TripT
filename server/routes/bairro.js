'use strict';

module.exports = function (app) {
	const controller = app.controllers.bairro;

  app
  .route('/bairro')
  .get(controller.readAll);

	app
	.route('/bairro/:id')
	.get(controller.read);
};
