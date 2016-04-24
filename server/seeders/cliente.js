'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Clientes', [
      {
        cli_ds_nome: 'Leemuel',
        cli_ds_celular: '27 98833-0000',
        cli_cd_usuario: '3'
      },
      {
        cli_ds_nome: 'Rasara',
        cli_ds_celular: '27 98977-5522',
        cli_cd_usuario: '4'
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Clientes', null, {});
  }
};
