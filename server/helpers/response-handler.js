'use strict';

const Response = require('./response');
const ErrorResponse = require('./error-response');

const jwt = require('jwt-simple');
const security = require('../config/security.json');

class ResponseHandler {
  static getResponse(msg) {
    return [ new Response(msg) ];
  }

  static getErrorResponse(msg, error) {
    return [ new ErrorResponse(msg, error) ];
  }

  static getTokenResponse(usuario) {
    const prefix = "JWT ";
    var token = prefix + jwt.encode(usuario, security.secret);

    return { token };
  }
}

module.exports = ResponseHandler;
