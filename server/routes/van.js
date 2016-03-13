'use strict';

module.exports = function (app) {
	const controller = app.controllers.van;

  app
  .route('/van')
  .get(controller.findAll)
	.post(controller.create)
	.put(controller.update)
	.delete(controller.delete);

	app
	.route('/van/:id')
	.get(controller.findById);
};
