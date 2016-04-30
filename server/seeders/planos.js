'use strict';

var Planos = require('./data/planos.json');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Planos', Planos, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Planos', null, {});
  }
};
