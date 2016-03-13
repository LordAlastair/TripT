'use strict';
module.exports = function(sequelize, DataTypes) {
	var Sequelize = sequelize.Sequelize;

  var ListaCaracteristica = sequelize.define('ListaCaracteristica', {
		lic_cd_lista_caracteristica: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		lic_cd_van: {
			allowNull: false,
			type: Sequelize.INTEGER
		},
		lic_cd_caracteristica: {
			allowNull: false,
			type: Sequelize.INTEGER
		}
	}, {
		timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return ListaCaracteristica;
};
