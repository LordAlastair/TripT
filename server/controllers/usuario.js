'use strict';

const models = require('../models');

module.exports = function(app) {
  var controller = {};

  controller.authenticate = function(req, res) {

  };

  controller.signup = function(req, res) {
    if (!req.body.name || !req.body.password) {
      res.json({success: false, msg: 'Please pass name and password.'});
    } else {
      var newUser = new User({
        name: req.body.name,
        password: req.body.password
      });

      newUser.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Username already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    }
  };

  return controller;
};
