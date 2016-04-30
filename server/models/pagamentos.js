'use strict';

module.exports = function(sequelize, DataTypes){
  var Sequelize = sequelize.Sequelize;

    var Pagamentos = sequelize.define('Pagamentos', {
    pag_cd_pagamento: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    pag_ds_pagamento: {
      allowNull: false,
      type: Sequelize.STRING(45)
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
      }
    }
  });

  return Pagamentos;
};
