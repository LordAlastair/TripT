'use strict';
module.exports = function(sequelize, DataTypes) {
	var Sequelize = sequelize.Sequelize;
	var schema = require('../schemas/caracteristica')(Sequelize);

  var Caracteristica = sequelize.define('Caracteristica', schema, {
	  timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Caracteristica;
};
