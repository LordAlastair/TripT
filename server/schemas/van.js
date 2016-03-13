module.exports = function(Sequelize) {
	var schema = {
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
	};

	return schema;
};
