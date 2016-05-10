'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var FornecedorPagamentos = sequelize.define('FornecedorPagamentos', {
    fpg_cd_fornecedor_pagamentos: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    fpg_cd_fornecedor: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    fpg_cd_pagamento: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    fpg_dt_expiracao: {
      type: Sequelize.DATE
    },
    fpg_bl_ativo: {
      type: Sequelize.BOOLEAN
    },
    fpg_dt_criado: {
      type: Sequelize.DATE
    },
    fpg_dt_alterado: {
      type: Sequelize.DATE
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        FornecedorPagamentos.belongsTo(models.Fornecedor,{
          foreignKey: 'fpg_cd_fornecedor',
          allowNull: false
        }),
        FornecedorPagamentos.belongsTo(models.Pagamentos,{
          foreignKey: 'fpg_cd_pagamento',
          allowNull: false
        })
      }
    }
  });

  return FornecedorPagamentos;
};
