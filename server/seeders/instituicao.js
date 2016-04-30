'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Instituicaos', [
      {
        ins_ds_instituicao: 'UVV'
      },
      {
        ins_ds_instituicao: 'UFES'
      },
      {
        ins_ds_instituicao: 'FAESA'
      },
      {
        ins_ds_instituicao: 'Multivix'
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Instituicaos', null, {});
  }
};
