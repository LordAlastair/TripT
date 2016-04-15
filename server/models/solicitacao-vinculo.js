'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var SolicitacaoVinculo = sequelize.define('SolicitacaoVinculo', {
    sov_cd_solicitacao_vinculo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
     sov_cd_cliente: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
     sov_cd_plano_vinculo: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
     sov_bl_aprovacao: {
      allowNull: false,
      type: Sequelize.BOOLEAN
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        SolicitacaoVinculo.hasMany(models.FornecedorPlanoVinculo, {
          foreignKey: 'fpv_cd_fornecedor_plano_vinculo',
          allowNull: false
        }, models.Cliente, {
          foreignKey: 'cli_cd_cliente',
          allowNull: false
        });
      }
    }
  });

  return SolicitacaoVinculo;
};