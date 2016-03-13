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
			}
    ], {});

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Vans', null, {});
  }
};
