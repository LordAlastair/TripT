module.exports = function(Sequelize) {
	var schema = {
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
	};

	return schema;
}
