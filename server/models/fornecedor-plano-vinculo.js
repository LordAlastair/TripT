'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var FornecedorPlanoVinculo = sequelize.define('FornecedorPlanoVinculo', {
    fpv_cd_vinculo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    fpv_cd_plano: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    fpv_cd_veiculo: {
      allowNull: false,
      type: Sequelize.INTEGER
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return FornecedorPlanoVinculo;
};