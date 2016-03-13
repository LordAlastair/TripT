'use strict';
const models = require('../models');

module.exports = function (app) {
	var controller = {};

	controller.create = function(req, res) {
		models.Van.findById(req.params.id).then(function(van) {
			res.json(van);
		});
	};

	controller.read = function(req, res) {
		models.Van.findAll().then(function(vans) {
			res.json(vans);
		});
	};

	controller.readAll = function(req, res) {

	};

	controller.delete = function(req, res) {

	};

	controller.update = function(req, res) {

	};

	controller.upsert = function(req, res) {

	};

	return controller;
};
