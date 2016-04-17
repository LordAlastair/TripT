'use strict';

const TokenResponse = require('./token-response');

class ResponseHandler {
  static getResponse(msg) {
    return [ { msg } ];
  }

  static getErrorResponse(msg, error) {
    return [ { msg, error } ];
  }

  static getTokenResponse(usuario) {
    return TokenResponse(usuario);
  }
}

module.exports = ResponseHandler;
