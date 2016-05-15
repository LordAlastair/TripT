'use strict';

module.exports = function(sequelize, DataTypes){
  var Sequelize = sequelize.Sequelize;

  var Voto = sequelize.define('Voto', {
    vot_cd_voto: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    vot_qt_pontuacao: {
      allowNull: false,
      type: Sequelize.INTEGER
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Voto.belongsTo(models.Cliente, {
          foreignKey: 'vot_cd_cliente',
          allowNull: false
        });

        Voto.belongsTo(models.Fornecedor, {
          foreignKey: 'vot_cd_fornecedor',
          allowNull: false
        });

        Voto.belongsTo(models.Veiculo, {
          foreignKey: 'vot_cd_veiculo',
          allowNull: false
        });
      }
    }
  });

  return Voto;
};
