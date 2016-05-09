'use strict';

var usuarioPadrao = require('./data/usuarios.json');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Usuarios', usuarioPadrao, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
