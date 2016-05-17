'use strict';

const models = require('../models');
const strings = require('../config/strings.json');

const ResponseHandler = require('../helpers/response-handler');

module.exports = function (app) {
  var controller = {};

  controller.find = function(req, res) {
    models
    .Veiculo
    .findById(req.params.id, {
      include: [
        { all: true }
      ]
    })
    .then(function(veiculo) {
      if (!veiculo) {
        res.status(404).end();
        return;
      }

      res.json(veiculo);
    });
  };

  controller.findAll = function(req, res) {
    models
    .Veiculo
    .findAll({
      where: {
        vei_cd_usuario: req.user.usu_cd_usuario
      },
      include: [
        { all: true }
      ]
    })
    .then(function(veiculos) {
      res.json(veiculos);
    });
  };

  controller.create = function(req, res) {
    // TEST: curl -v -X POST http://$(docker-machine ip):3000/veiculo -d '{ "vei_ds_placa": "ABC1234", "vei_ds_der": "102/50-01", "vei_qt_vagas": 30, "vei_ds_modelo": "Volkswagen", "vei_ds_cor": "rosa"}' -H "Content-Type: application/json"

    req.assert('vei_ds_placa', strings.veiculo.errors.VEI_DS_PLACA_REQUIRED).notEmpty();
    req.assert('vei_ds_der', strings.veiculo.errors.VEI_DS_DER_REQUIRED).notEmpty();
    req.assert('vei_qt_vagas', strings.veiculo.errors.VEI_QT_VAGAS_REQUIRED).notEmpty();

    var errors = req.validationErrors();

    if (errors) {
      res.status(412).json(errors);
      return;
    }

    req.body.vei_cd_usuario = req.user.usu_cd_usuario;

    models
    .Veiculo
    .create(req.body)
    .then(function(veiculo) {
      res.status(201).json(veiculo);
    })
    .catch(function(error) {
      res.status(412).json(error);
    });
  };

  controller.update = function(req, res) {
    models
    .Veiculo
    .update(req.body, {
      where: {
        vei_cd_veiculo: req.params.id
      }
    })
    .then(function() {
      models
      .Veiculo
      .findById(req.params.id, {
        include: [
          { all: true }
        ]
      })
      .then(function(veiculo) {
        if (!veiculo) {
          res.status(404).end();
          return;
        }

        res.json(veiculo);
      });
    })
    .catch(function(error) {
      res.status(412).json(error);
    });
  };

  controller.delete = function(req, res) {
    models
    .Veiculo
    .findById(req.params.id, {
      where: {
        vei_cd_usuario: req.user.usu_cd_usuario
      }
    })
    .then(function(veiculo) {
      if (!veiculo) {
        res.status(404).json(ResponseHandler.getErrorResponse(strings.veiculo.errors.VEICULO_NOT_FOUND));
        return;
      }

      veiculo
      .destroy()
      .then(function() {
        res.json(ResponseHandler.getResponse(strings.veiculo.success.VEICULO_DELETED));
      })
      .catch(function(error) {
        res.status(500).json(ResponseHandler.getErrorResponse(strings.veiculo.errors.CANT_DELETE_VEICULO, error));
      })
    })
    .catch(function(error) {
      res.status(500).json(ResponseHandler.getErrorResponse(strings.veiculo.errors.CANT_FIND_VEICULO, error));
    });
  };

  controller.search = function(req, res) {
    models
    .InstituicaoVeiculo
    .findAll({
      include: [
        { all: true },
        {
          model: models.Veiculo,
          include: [
              {
              model: models.Usuario,
              include: [{
                model: models.Fornecedor
              }]
            }
          ]
          ,
          model: models.VeiculoBairro,
          include: [{
            model: models.Bairro
          }]
        }
      ]
    })
    .then(function(veiculos) {
      res.json(veiculos);
    });
  };

  return controller;
};
