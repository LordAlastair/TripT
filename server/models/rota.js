'use strict';
module.exports = function(sequelize, DataTypes) {
	var Sequelize = sequelize.Sequelize;
	var schema = require('../schemas/rota')(Sequelize);

  var Rota = sequelize.define('Rota', schema, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
	
  return Rota;
};
