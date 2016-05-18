'use strict';

const models = require('../models');
const async = require('async');
const ResponseHandler = require('../helpers/response-handler');
const strings = require("../config/strings.json");

module.exports = function (app) {
  var controller = {};

  controller.find = function (req, res) {
    models
      .InstituicaoVeiculo
      .findAll(
      {
        where: { inv_cd_veiculo: req.params.id },
        include: [{
          model: models.VeiculoBairro,
          where: { veb_cd_veiculo: req.params.id }
        }]
      })
      .then(function (InstituicaoVeiculo) {
        if (InstituicaoVeiculo) {
          res.json(InstituicaoVeiculo);
        } else {
          res.status(404).send();
        }
      });
  };

  controller.rotasInstituicao = function (req, res) {
    models
      .InstituicaoVeiculo
      .findAll(
      {
        where: { inv_cd_veiculo: req.params.id, inv_cd_instituicao: req.params.idInstituicao },
        include: [{
          model: models.VeiculoBairro,
          where: { veb_cd_veiculo: req.params.id }
        }]
      })
      .then(function (veiculoBairro) {
        if (veiculoBairro) {
          res.json(veiculoBairro);
        } else {
          res.status(404).send();
        }
      });
  };


  controller.findAll = function (req, res) {
    models
      .InstituicaoVeiculo
      .findAll()
      .then(function (instituicaoVeiculo) {
        res.json(instituicaoVeiculo);
      });
  };

  controller.create = function (req, res) {
    //

    models
    .Fornecedor
    .findOne({
      where: {
        for_cd_usuario: req.user.usu_cd_usuario
      }
    }).then(function(response){

      if(req.body.inv_cd_instituicao)
        var inv_cd_instituicao1 = req.body.inv_cd_instituicao.ins_cd_instituicao;
      else
        var inv_cd_instituicao1 = null;
      var params = {
        inv_cd_veiculo: req.body.inv_cd_veiculo.vei_cd_veiculo,
        inv_cd_instituicao: inv_cd_instituicao1,
        inv_cd_fornecedor: response.for_cd_fornecedor,
        inv_cd_tipo_transporte: req.body.inv_cd_tipo_transporte,
        inv_ds_turno: req.body.inv_ds_turno,
      };

      models
        .InstituicaoVeiculo
        .create(params)
        .then(function (instituicaoVeiculo) {
          res.status(201).json(instituicaoVeiculo);

          for (req.body.bairros in cd) {



            var params2 = {
              veb_cd_bairro: cd,
              veb_cd_veiculo: params.inv_cd_veiculo,
              veb_cd_instituicao_veiculo: instituicaoVeiculo.inv_cd_instituicao_veiculo,
              veb_vl_bairro: 0
            };

            models
              .VeiculoBairro
              .create(params2);
          }



        })
        .catch(function (error) {
          res.status(500).json(ResponseHandler.getErrorResponse("Erro ta aqui"));
        })
    });


  };

  controller.update = function (req, res) {
    var errors = req.validationErrors();

    if (errors) {
      res.status(412).json(errors);
      return;
    }

    if (!req.body.ins_cd_instituicao) {
      controller.create(req, res);
      return;
    }

    models
      .InstituicaoVeiculo
      .update(req.body, {
        where: {
          inv_cd_instituicao_veiculo: req.body.inv_cd_instituicao_veiculo
        }
      })
      .then(function (instituicaoVeiculo) {






        res.json(instituicaoVeiculo);
      })
      .catch(function (error) {
        res.status(500).json(ResponseHandler.getErrorResponse("Zicou aqui"));
      });
  };

  controller.delete = function (req, res) {
    models
      .InstituicaoVeiculo
      .delete(req.body, {
        where: {
          inv_cd_instituicao_veiculo: req.params.id
        }
      })
      .then(function (instituicaoVeiculo) {
        res.json(instituicaoVeiculo);
      })
      .catch(function (error) {
        res.status(500).json(ResponseHandler.getErrorResponse("Error"));
      });
  };

  return controller;
};
