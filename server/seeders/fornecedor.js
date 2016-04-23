'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // return queryInterface.bulkInsert('Fornecedors', [
    //   {
    //     for_ds_pessoa: 'José',
    //     for_ds_fantasia_nome: 'Nome fantasia',
    //     for_ds_celular: '997334520',
    //     for_ds_email: 'jose@t.com',
    //     for_fl_pessoa: '1',
    //     for_cd_usuario: '1'
    //   }
    // ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Fornecedors', null, {});
  }
};
