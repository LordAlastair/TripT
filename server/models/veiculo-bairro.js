'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var VeiculoBairro = sequelize.define('VeiculoBairro', {
    veb_cd_veiculo_bairro: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    veb_cd_veiculo: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    veb_cd_bairro: {
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

  return VeiculoBairro;
};
