'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var configFile = process.env.DOCKER_ENV ? '/../config/config.docker.json' : '/../config/config.json';
var config    = require(__dirname + configFile)[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
.readdirSync(__dirname)
.filter(function(file) {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(function(file) {
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

function createAuditoria(instance, options) {
  if (instance.$modelOptions.name.plural !== "Auditoria") {
    var auditoriaObject = {
      aud_ds_tabela: instance.$modelOptions.name.plural,
      aud_ds_alteracao: JSON.stringify(instance._changed),
      aud_cd_usuario: 0,
      aud_ts_modificacao: new Date(),
      aud_ds_modificacao: JSON.stringify({
        "before": instance._previousDataValues,
        "now": instance.dataValues
      })
    };

    db
    .Auditoria
    .create(auditoriaObject)
    .catch(error => console.log(error));
  }
}

sequelize.addHook('afterCreate', createAuditoria);
sequelize.addHook('afterUpdate', createAuditoria);
sequelize.addHook('afterDelete', createAuditoria);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
