'use strict';

var veiculoBairros = require('./data/veiculo-bairro.json');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('VeiculoBairros', veiculoBairros, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('VeiculoBairros', null, {});
  }
};
