'use strict';

var Pagamentos = require('./data/pagamentos.json');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pagamentos', Pagamentos, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pagamentos', null, {});
  }
};
