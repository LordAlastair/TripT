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
    },
    veb_cd_instituicao_veiculo: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    veb_vl_bairro: {
      allowNull: false,
      type: Sequelize. DECIMAL(18, 2)
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
