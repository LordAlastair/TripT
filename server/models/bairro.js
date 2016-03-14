'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var Bairro = sequelize.define('Bairro', {
    bai_cd_bairro: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    bai_ds_bairro: {
      allowNull: false,
      type: Sequelize.STRING
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Bairro;
};
