'use strict';

class ErrorResponse {
  construct(msg, error) {
    this.msg = msg;
    this.error = error;
  }
}

module.exports = ErrorResponse;
