'use strict';

var veiculoBairros = require('./data/veiculo-bairro.json');
var veiculos = require('./data/veiculos.json');

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Veiculos', veiculos, {});
    return queryInterface.bulkInsert('VeiculoBairros', veiculoBairros, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('VeiculoBairros', null, {});
    return queryInterface.bulkDelete('Veiculos', null, {});
  }
};
