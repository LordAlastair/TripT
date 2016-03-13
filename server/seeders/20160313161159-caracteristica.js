'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Caracteristicas', [
      { car_ds_caracteristica: 'Wi-fi' },
      { car_ds_caracteristica: 'Ar-condicionado'  },
      { car_ds_caracteristica: 'TV'  }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Caracteristicas', null, {});
    }
};
