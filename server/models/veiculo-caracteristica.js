'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var VeiculoCaracteristica = sequelize.define('VeiculoCaracteristica', {
    vec_cd_veiculo_caracteristica: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    vec_cd_veiculo: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    vec_cd_caracteristica: {
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

  return VeiculoCaracteristica;
};
