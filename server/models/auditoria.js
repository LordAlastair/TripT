'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var Auditoria = sequelize.define('Auditoria', {
    aud_cd_auditoria: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    aud_ds_tabela: {
      allowNull: false,
      type: Sequelize.STRING(45)
    },
    aud_ds_alteracao: {
      allowNull: false,
      type: Sequelize.STRING(45)
    }, 
    aud_cd_usuario: {
      allowNull: false,
      type: Sequelize.STRING(45)
    },
    aud_ts_modificacao: {
      allowNull: false,
      type: Sequelize.DATE
    },
    aud_ds_modificacao: {
      allowNull: false,
      type: Sequelize.STRING(45)
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Auditoria;
};