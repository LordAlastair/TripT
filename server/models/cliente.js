'use strict';

module.exports = function(sequelize, DataTypes){
  var Sequelize = sequelize.Sequelize;

  var Cliente = sequelize.define('Cliente', {
    cli_cd_cliente: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    cli_ds_nome: {
      allowNull: false,
      type: Sequelize.STRING
    },

    cli_ds_sobrenome: {
      allowNull: true,
      type: Sequelize.STRING
    },

    cli_ds_cep: {
      allowNull: true,
      type: Sequelize.STRING
    },

    cli_ds_endereco: {
      allowNull: true,
      type: Sequelize.STRING
    },

    cli_ds_numero: {
      allowNull: true,
      type: Sequelize.INTEGER
    },

    cli_ds_complemento: {
      allowNull: true,
      type: Sequelize.STRING
    },

    cli_ds_bairro: {
      allowNull: true,
      type: Sequelize.STRING
    },

    cli_ds_cidade: {
      allowNull: true,
      type: Sequelize.STRING
    },

    cli_ds_celular: {
      allowNull: true,
      type: Sequelize.STRING
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Cliente.belongsTo(models.Instituicao, {
          foreignKey: 'cli_cd_instituicao',
          allowNull: false
        });

        Cliente.belongsTo(models.Usuario, {
          foreignKey: 'cli_cd_usuario',
          allowNull: false
        });
      }
    }
  });

  return Cliente;
};
