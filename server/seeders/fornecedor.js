'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Fornecedors', [
      {
        for_ds_pessoa: 'José',
        for_ds_fantasia_nome: 'Nome fantasia',
        for_ds_celular: '997334520',
        for_ds_email: 'jose@t.com'
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Fornecedors', null, {});
  }
};
