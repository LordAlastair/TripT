'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var Veiculo = sequelize.define('Veiculo', {
    vei_cd_veiculo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    vei_ds_placa: {
      allowNull: false,
      type: Sequelize.STRING
    },
    vei_ds_der: {
      allowNull: false,
      type: Sequelize.STRING
    },
    vei_qt_vagas: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    vei_ds_modelo: {
      type: Sequelize.STRING
    },
    vei_ds_cor: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Veiculo.belongsToMany(models.Bairro, {
             as: 'Rotas',
             through: {
               model: models.VeiculoBairro,
               unique: false
             },
             foreignKey: 'veb_cd_veiculo',
             otherKey: 'veb_cd_bairro',
             timestamps: false
       });

        Veiculo.belongsTo(models.Usuario, {
          foreignKey: 'vei_cd_usuario',
          allowNull: false
        });
      }
    }
  });

  return Veiculo;
};
