'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Fornecedors', [
      {
        for_ds_fantasia_nome: 'Hewcla',
        for_ds_celular: '27 99633-5099',
        for_fl_pessoa: '1',
        for_cd_usuario: '1',
        for_cd_transporte: '1'
      },
      {
        for_ds_fantasia_nome: 'Winecwen',
        for_ds_celular: '27 3019-8890',
        for_fl_pessoa: '2',
        for_cd_usuario: '2',
        for_cd_transporte: '2'
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Fornecedors', null, {});
  }
};
