'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var Caracteristica = sequelize.define('Caracteristica', {
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
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Caracteristica;
};
