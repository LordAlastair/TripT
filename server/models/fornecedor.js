'use strict';

module.exports = function(sequelize, DataTypes){
  var Sequelize = sequelize.Sequelize;

  var Fornecedor = sequelize.define('Fornecedor', {
    for_cd_fornecedor: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    for_fl_pessoa: {
      allowNull: false,
      type: Sequelize.INTEGER
    },

    for_ds_pessoa: {
      allowNull: false,
      type: Sequelize.STRING
    },

    for_ds_razao_social: {
      allowNull: true,
      type: Sequelize.STRING
    },

    for_ds_fantasia_nome: {
      allowNull: false,
      type: Sequelize.STRING
    },

    for_ds_cnpj_cpf: {
      allowNull: true,
      type: Sequelize.STRING
    },

    for_ds_cep: {
      allowNull: true,
      type: Sequelize.STRING
    },

    for_ds_endereco: {
      allowNull: true,
      type: Sequelize.STRING
    },

    for_ds_numero: {
      allowNull: true,
      type: Sequelize.STRING
    },

    for_ds_complemento: {
      allowNull: true,
      type: Sequelize.STRING
    },

    for_ds_bairro: {
      allowNull: true,
      type: Sequelize.STRING
    },

    for_ds_cidade: {
      allowNull: true,
      type: Sequelize.STRING
    },

    for_ds_celular: {
      allowNull: false,
      type: Sequelize.STRING
    },

    for_ds_email: {
      allowNull: false,
      type: Sequelize.STRING
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Fornecedor.belongsTo(models.Usuario, {
          foreignKey: 'for_cd_usuario',
          allowNull: false
        });
      }
    }
  });

  return Fornecedor;
};
