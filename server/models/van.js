'use strict';
module.exports = function(sequelize, DataTypes) {
  var Van = sequelize.define('Van', {
    placa: DataTypes.STRING,
    der: DataTypes.STRING,
    vagas: DataTypes.INTEGER,
    modelo: DataTypes.STRING,
    cor: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Van;
};