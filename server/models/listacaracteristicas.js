'use strict';
module.exports = function(sequelize, DataTypes) {
  var ListaCaracteristicas = sequelize.define('ListaCaracteristicas', {
    vanId: DataTypes.INTEGER,
    caracteristicaId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ListaCaracteristicas;
};