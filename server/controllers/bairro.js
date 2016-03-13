'use strict';
const models = require('../models');

module.exports = function (app) {
	var controller = {};

	controller.find = function(req, res) {
		models.Bairro.findById(req.params.id).then(function(bairro) {
      res.json(bairro);
    });
	};

	controller.findAll = function(req, res) {
    models.Bairro.findAll().then(function(bairros) {
      res.json(bairros);
    });
	};

	return controller;
};
