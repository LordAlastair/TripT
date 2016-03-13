'use strict';
module.exports = function(sequelize, DataTypes) {
	var Sequelize = sequelize.Sequelize;
	var schema = require('../schemas/van')(Sequelize);

  var Van = sequelize.define('Van', schema, {
		timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Van;
};
