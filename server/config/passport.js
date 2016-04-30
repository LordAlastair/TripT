const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const models = require('../models');
const security = require('./security.json');

module.exports = function (passport) {
  var opts = {};

  opts.secretOrKey = security.secret;
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();

  passport.use(new JwtStrategy(opts, function(payload, done) {
    models
    .Usuario
    .findById(payload.usu_cd_usuario)
    .then(function(usuario) {
      return done(null, usuario);
    })
    .catch(function(err) {
      return done(err, false);
    });
  }));
};
