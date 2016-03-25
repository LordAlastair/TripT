const app = require('../../config/app');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should;


function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arrayCaracteristica = [];

describe("GET /Caracteristica", function() {
  it("deve retornar um json array", function(done) {
    request(app)
    .get('/caracteristica')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if(err) throw err;

      expect(res.body).to.be.an('array');
      expect(res.body).to.have.length.of.at.least(3);

      arrayCaracteristica = res.body;

      done();
    });
  });
});
