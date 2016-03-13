'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Caracteristicas', [
      { nome: 'Wi-fi', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Ar-condicionado' , createdAt: new Date(), updatedAt: new Date() },
      { nome: 'TV' , createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Caracteristicas', null, {});
    }
};
