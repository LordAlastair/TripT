'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var FornecedorPlano = sequelize.define('FornecedorPlano', {
    fop_cd_Fornecedor_plano: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    fop_ds_plano: {
      allowNull: false,
      type: Sequelize.STRING
    },
    fop_vl_plano: {
      allowNull: false,
      type: Sequelize.FLOAT(18, 2)
    },
    fop_id_periodicidade: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    fop_dt_expiracao: {
      type: Sequelize.DATE
    },
    fop_id_rota: {
      type: Sequelize.INTEGER
    },
    fop_bl_ativo: {
      type: Sequelize.BOOLEAN
    },
    fop_dt_criado: {
      type: Sequelize.DATE
    },
    fop_dt_alterado: {
      type: Sequelize.DATE
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        FornecedorPlano.hasMany(models.FornecedorPlanoVinculo, {
          foreignKey: 'fpv_cd_plano',
          allowNull: false
        }, models.Cliente, {
          foreignKey: 'cli_cd_plano',
          allowNull: false
        });
      }
    }
  });

  return FornecedorPlano;
};