'use strict';
module.exports = function (sequelize, DataTypes) {
    var Sequelize = sequelize.Sequelize;
    var InstituicaoVeiculo = sequelize.define('InstituicaoVeiculo', {
        inv_cd_instituicao_veiculo: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        inv_cd_instituicao: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        inv_cd_veiculo: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        inv_ds_hora_ida: {
            allowNull: false,
            type: Sequelize.TIME
        },
        inv_ds_hora_volta: {
            allowNull: false,
            type: Sequelize.TIME
        }
    },  {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        InstituicaoVeiculo.hasMany(models.VeiculoBairro, {
          foreignKey: 'veb_cd_instituicao_veiculo',
          allowNull: false
        });
      }
    }
  });
    return InstituicaoVeiculo;
};