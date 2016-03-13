'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bairro = sequelize.define('Bairro', {
    nome: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Bairro;
};