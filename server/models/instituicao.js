'use strict';

module.exports = function(sequelize, DataTypes){
  var Sequelize = sequelize.Sequelize;

  var Instituicao = sequelize.define('Instituicao', {
    ins_cd_instituicao: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    ins_ds_instituicao: {
      allowNull: false,
      type: Sequelize.STRING
    },

    ins_ds_logo: {
      allowNull: true,
      type: Sequelize.STRING
    }
  }, {
    tableName: 'Instituicoes',
    timestamps: false
  });

  return Instituicao;
};
