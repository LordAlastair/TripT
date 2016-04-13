'use strict';

const Response = require('./response');
const ErrorResponse = require('./error-response');
const TokenResponse = require('./token-response');

class ResponseHandler {
  static getResponse(msg) {
    return [ new Response(msg) ];
  }

  static getErrorResponse(msg, error) {
    return [ new ErrorResponse(msg, error) ];
  }

  static getTokenResponse(usuario) {
    return new TokenResponse(usuario);
  }
}

module.exports = ResponseHandler;
