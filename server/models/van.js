'use strict';
module.exports = function(sequelize, DataTypes) {
	var Sequelize = sequelize.Sequelize;

  var Van = sequelize.define('Van', {
		van_cd_van: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		van_ds_placa: {
			allowNull: false,
			type: Sequelize.STRING
		},
		van_ds_der: {
			allowNull: false,
			type: Sequelize.STRING
		},
		van_qt_vagas: {
			allowNull: false,
			type: Sequelize.INTEGER
		},
		van_ds_modelo: {
			type: Sequelize.STRING
		},
		van_ds_cor: {
			type: Sequelize.STRING
		}
	}, {
		timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Van;
};
