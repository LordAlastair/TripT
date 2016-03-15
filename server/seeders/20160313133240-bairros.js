'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bairros', [
      { bai_ds_bairro: 'Itapuã' },
      { bai_ds_bairro: 'Itaparica' }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Bairros', null, {});
  }
};
