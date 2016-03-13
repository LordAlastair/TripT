'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
		var schema = require('../schemas/lista-caracteristica')(Sequelize);
    return queryInterface.createTable('ListaCaracteristicas', schema);
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('ListaCaracteristicas');
  }
};
