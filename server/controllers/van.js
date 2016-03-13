'use strict';

module.exports = function (app) {
	var controller = {};

	controller.get = function(req, res) {
		res.send("Hello");
	};

	return controller;
};
