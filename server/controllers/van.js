'use strict';
const models = require('../models');

module.exports = function (app) {
	var controller = {};

	controller.find = function(req, res) {
		models.Van.findById(req.params.id).then(function(van) {
			res.json(van);
		});
	};

	controller.findAll = function(req, res) {
		models.Van.findAll().then(function(vans) {
			res.json(vans);
		});
	};

	controller.delete = function(req, res) {

	};

	controller.update = function(req, res) {

	};

	controller.upsert = function(req, res) {

	};

	return controller;
};
