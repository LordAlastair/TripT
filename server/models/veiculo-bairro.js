'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var VeiculoBairro = sequelize.define('VeiculoBairro', {
     veb_cd_veiculo_bairro: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
    },

    veb_cd_veiculo: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: null
    },
    veb_cd_bairro: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    veb_cd_instituicao_veiculo: {
      allowNull: true,
      type: Sequelize.INTEGER,
      unique: false
    },
    veb_vl_bairro: {
      allowNull: false,
      type: Sequelize. DECIMAL(18, 2)
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        VeiculoBairro.belongsTo(models.Veiculo, {
          foreignKey: 'veb_cd_veiculo',
          allowNull: false
        });

        VeiculoBairro.belongsTo(models.Bairro, {
          foreignKey: 'veb_cd_bairro',
          allowNull: false
        });
      }
    }
  });

  return VeiculoBairro;
};
