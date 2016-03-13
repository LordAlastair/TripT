module.exports = function (Sequelize) {
	var schema = {
		bai_cd_bairro: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		bai_ds_bairro: {
			allowNull: false,
			type: Sequelize.STRING
		}
	};

	return schema;
};
