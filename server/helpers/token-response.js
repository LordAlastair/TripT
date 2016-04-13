'use strict';

const jwt = require('jwt-simple');
const security = require('../config/security.json');
const prefix = "JWT ";

class TokenResponse {
  constructor(usuario) {
    this.token = prefix + jwt.encode(usuario, security.secret); 
  }
}

module.exports = TokenResponse;
