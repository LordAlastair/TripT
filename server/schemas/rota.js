module.exports = function(Sequelize) {
	var schema = {
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
	};

	return schema;
};
