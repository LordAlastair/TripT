'use strict';

const jwt = require('jwt-simple');
const security = require('../config/security.json');
const prefix = "JWT ";

module.exports = function(usuario, role) {
  var token = usuario.get();
  token.role = role;

  return {
    token: prefix + jwt.encode(token, security.secret)
  };
};
