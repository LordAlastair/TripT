'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bairros', [
			{ nome: 'Itapuã', createdAt: new Date(), updatedAt: new Date() },
			{ nome: 'Itaparica' , createdAt: new Date(), updatedAt: new Date() }
		], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Bairros', null, {});
  }
};
