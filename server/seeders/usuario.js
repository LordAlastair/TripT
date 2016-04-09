'use strict';

var usuarioPadrao = require('./data/usuarioPadrao.json');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Usuarios', usuarioPadrao, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
