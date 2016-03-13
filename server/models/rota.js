'use strict';
module.exports = function(sequelize, DataTypes) {
	var Sequelize = sequelize.Sequelize;

  var Rota = sequelize.define('Rota', {
		rot_cd_rota: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		rot_cd_van: {
			allowNull: false,
			type: Sequelize.INTEGER
		},
		rot_cd_bairro: {
			allowNull: false,
			type: Sequelize.INTEGER
		}
	}, {
    classMethods: {
			timestamps: false,
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Rota;
};
