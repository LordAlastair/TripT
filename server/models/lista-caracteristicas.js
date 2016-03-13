'use strict';
module.exports = function(sequelize, DataTypes) {
	var Sequelize = sequelize.Sequelize;
	var schema = require('../schemas/rota')(Sequelize);

  var ListaCaracteristica = sequelize.define('ListaCaracteristica', schema, {
		timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
	
  return ListaCaracteristica;
};
