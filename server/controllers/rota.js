'use strict';
const models = require('../models');

module.exports = function (app) {
  var controller = {};

  controller.find = function(req, res) {
    models
    .Rota
    .findById(req.params.id)
    .then(function(rota) {
      res.json(rota);
    });
  };

  controller.findAll = function(req, res) {
    models
    .Rota
    .findAll()
    .then(function(rotas) {
      res.json(rotas);
    });
  };

  controller.create = function(req, res) {
    // TEST: curl -v -X POST http://localhost:3000/rota -d '{ "rot_cd_rota": "1", "rot_cd_van": "120", "rot_cd_bairro": "30" }' -H "Content-Type: application/json"

    models
    .Rota
    .create(req.body)
    .then(function(rota) {
      res.json(rota);
    })
    .catch(function(error) {
      res.status(500).json(error);
    });
  };

  controller.update = function(req, res) {
    //TEST: curl -v -X PUT -H 'Content-Type:application/json' -d '{ "rot_cd_van": "23", "rot_cd_bairro": "12" }' http://localhost:3000/rota/1

    models
    .Rota
    .update(req.body,{
              where: {
                rot_cd_rota: req.params.id
              }
            })
    .then(function(rota) {
      res.json(rota);
    })
    .catch(function(error) {
      res.status(500).json(error);
      });
    };


  return controller;
};
