'use strict';

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport('smtps://vali.develop%40gmail.com:vali2016@smtp.gmail.com');

var defaultOptions = {
  from: '"Tript" <vali.develop@gmail.com>'
};

class MailHelper {
  static send(options) {
    options.from = defaultOptions.from;
    
    return new Promise(function(resolve, reject) {
      transporter.sendMail(options, function(error, info) {
        if (error) {
          return reject(error);
        }

        resolve(info);
      });
    });
  }
}

module.exports = MailHelper
