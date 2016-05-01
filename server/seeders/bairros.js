'use strict';

var bairrosVitoria = require('./data/bairros-vitoria.json');
var bairrosVilaVelha = require('./data/bairros-vila-velha.json');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bairros', bairrosVilaVelha, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Bairros', null, {});
  }
};
