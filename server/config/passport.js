const JwtStrategy = require('passport-jwt').Strategy;

const models = require('../models');
const security = require('./security.json');

module.exports = function (passport) {
  var opts = {};

  opts.secretOrKey = security.secret;

  passport.use(new JwtStrategy(opts, function(payload, done) {
    models.Usuario.findById(payload.id, function(err, usuario) {
      if (err) {
        return done(err, false);
      }

      if (usuario) {
        done(null, usuario);
      } else {
        done(null, false);
      }
    });
  }));
};
