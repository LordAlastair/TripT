'use strict';

class ErrorResponse {
  constructor(msg, error) {
    this.msg = msg;
    if (error) this.error = error;
  }
}

module.exports = ErrorResponse;
