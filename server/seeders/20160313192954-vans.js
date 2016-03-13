'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Vans', [
      {
        van_cd_van: '1',
        van_ds_placa: 'ABC1234',
        van_ds_der: '102/50-01',
        van_qt_vagas: 30,
        van_ds_modelo: 'Volkswagen',
        van_ds_cor: 'rosa'
       },
      {
        van_cd_van: '2',
        van_ds_placa: 'CDS-1472',
        van_ds_der: '751/32-02',
        van_qt_vagas: 25,
        van_ds_modelo: 'PEGEOUT',
        van_ds_cor: 'VERDE'
      }
    ], {});

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Vans', null, {});
  }
};
