'use strict';

module.exports = function (app) {
	const controller = app.controllers.home;

  app
  .route('/home')
  .get(controller.get);
};
