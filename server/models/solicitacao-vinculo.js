'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;
  var SolicitacaoVinvulo = sequelize.define('SolicitacaoVinculo', {
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
    },
  }, {
    timestamps: false
  });
  return SolicitacaoVinvulo;
};
