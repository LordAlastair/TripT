'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Vans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      placa: {
        type: Sequelize.STRING
      },
      der: {
        type: Sequelize.STRING
      },
      vagas: {
        type: Sequelize.INTEGER
      },
      modelo: {
        type: Sequelize.STRING
      },
      cor: {
        type: Sequelize.STRING
      },
      listaCaracteristicasId: {
        type: Sequelize.INTEGER
      },
      rotaId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Vans');
  }
};
