'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
		var schema = require('../schemas/caracteristica')(Sequelize);
    return queryInterface.createTable('Caracteristicas', schema);
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Caracteristicas');
  }
};
