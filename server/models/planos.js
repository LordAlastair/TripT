'use strict';

module.exports = function(sequelize, DataTypes){
  var Sequelize = sequelize.Sequelize;

  var Planos = sequelize.define('Planos', {
    pla_cd_plano: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    pla_ds_plano: {
      allowNull: false,
      type: Sequelize.STRING(45)
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Planos.hasMany(models.FornecedorPlano, {
          foreignKey: 'fop_cd_plano',
          allowNull: false
        });
      }
    }
  });

  return Planos;
};
