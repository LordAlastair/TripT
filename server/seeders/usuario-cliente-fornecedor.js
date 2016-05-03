'use strict';

var usuarios = require('./data/usuarios.json');
var clientes = require('./data/clientes.json');
var fornecedores = require('./data/fornecedores.json');

module.exports = {
  up: function (queryInterface, Sequelize) {
    var resultUsuarios = queryInterface.bulkInsert('Usuarios', usuarios, {});
    var resultClientes = queryInterface.bulkInsert('Clientes', clientes, {});
    return queryInterface.bulkInsert('Fornecedores', fornecedores, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
