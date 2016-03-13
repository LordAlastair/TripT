'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rota = sequelize.define('Rota', {
    vanId: DataTypes.INTEGER,
    bairroId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rota;
};