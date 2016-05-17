'use strict';

var veiculos = require('./data/veiculos.json');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Veiculos', veiculos, {});
  },

  down: function (queryInterface, Sequelize) {;
    return queryInterface.bulkDelete('Veiculos', null, {});
  }
};
