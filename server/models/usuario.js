'use strict';

var models = require('./index');

module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var Usuario = sequelize.define('Usuario', {
    usu_cd_usuario: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    usu_ds_email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    },
    usu_ds_senha: {
      allowNull: false,
      type: Sequelize.STRING
    },
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Usuario.hasOne(models.Fornecedor, {
          foreignKey: 'for_cd_usuario',
          allowNull: false
        });
      }
    },
    instanceMethods: { },
    hooks: { }
  });

  return Usuario;
};
