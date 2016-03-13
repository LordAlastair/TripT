'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
		var schema = require('../schemas/bairro')(Sequelize);
    return queryInterface.createTable('Bairros', schema);
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Bairros');
  }
};
