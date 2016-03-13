'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
		var schema = require('../schemas/van')(Sequelize);
    return queryInterface.createTable('Vans', schema);
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Vans');
  }
};
