# Models

Nesse diretório se encontram os models do projeto.

## Formas de escrever um Model

Toda documentação necessária pode ser encontrada em [Sequelize.js](http://docs.sequelizejs.com/en/latest/).

Sobre definição de models: [Sequelize.js - Models > Definition](http://docs.sequelizejs.com/en/latest/docs/models-definition/)
Sobre como usar os models: [Sequelize.js - Models > Usage](http://docs.sequelizejs.com/en/latest/docs/models-usage/)

## Boilerplate

```javascript

'use strict';

module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var Model = sequelize.define('Model', {
    mod_cd_model: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    mod_ds_model: {
      allowNull: false,
      type: Sequelize.STRING
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associações com outros models podem ser definidas nessa função.
      }
    }
  });

  return Model;
};

```