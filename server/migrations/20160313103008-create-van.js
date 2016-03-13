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
				allowNull: false,
        type: Sequelize.STRING
      },
      der: {
				allowNull: false,
        type: Sequelize.STRING
      },
      vagas: {
				allowNull: false,
        type: Sequelize.INTEGER
      },
      modelo: {
        type: Sequelize.STRING
      },
      cor: {
        type: Sequelize.STRING
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
