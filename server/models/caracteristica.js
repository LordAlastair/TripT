'use strict';
module.exports = function(sequelize, DataTypes) {
  var Caracteristica = sequelize.define('Caracteristica', {
    nome: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Caracteristica;
};