'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
		var schema = require('../schemas/rota')(Sequelize);
    return queryInterface.createTable('Rotas', schema);
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Rotas');
  }
};
