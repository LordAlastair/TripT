'use strict';

var veiculoInstituicao = require('./data/veiculo-instituicao.json');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('InstituicaoVeiculos', veiculoInstituicao, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('InstituicaoVeiculos', null, {});
  }
};
