const app = require('../../config/app');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arrayBairros = [];

describe("GET /bairro", function() {
  it("deve retornar um json array", function(done) {
    request(app)
    .get('/bairro')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;

      expect(res.body).to.be.an('array');
      expect(res.body).to.have.length.above(1);


      arrayBairros = res.body;

      done();
    });
  });
});

describe("GET /bairro/:id", function() {
  var bairro;
  var errorResponse;

  it("deve retornar um json object e código 200", function(done) {
    var id = arrayBairros[0].bai_cd_bairro;

    request(app)
    .get(`/bairro/${id}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;

      expect(res.body).to.be.a('object');
      expect(res.body).to.have.all.keys('bai_cd_bairro', 'bai_ds_bairro');

      bairro = res.body

      done();
    });
  });

  it("deve ter bai_cd_bairro igual a :id", function(done) {
    var bairros = 0;
    var id = arrayBairros[bairros].bai_cd_bairro;

    for(bairros = 0 ; bairros < id; bairros++){
      expect(bairro).to.have.property('bai_cd_bairro').that.is.equals(id);
    }

    done();
  });

  it("deve ter a chave 'bai_ds_bairro' com uma string", function(done) {
    expect(bairro).to.have.property('bai_ds_bairro').that.is.a('string');

    done();
  });

  it("deve retornar codigo 404 ao buscar codigos que nao existem", function(done) {
    var id = getRandomIntInclusive(200,300);

    request(app)
    .get(`/bairro/${id}`)
    .expect(404)
    .end(function (err, res) {
      if (err) throw err;

      done();
    });
  });
});
