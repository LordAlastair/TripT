'use strict';

const jwt = require('jwt-simple');
const security = require('../config/security.json');
const prefix = "JWT ";

module.exports = function(usuario) {
  return {
    token: prefix + jwt.encode(usuario, security.secret)
  };
};
