module.exports = function(Sequelize) {
	var schema = {
		car_cd_caracteristica: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		car_ds_caracteristica: {
			allowNull: false,
			type: Sequelize.STRING
		}
	};

	return schema;
};
