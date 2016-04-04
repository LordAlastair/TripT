const app = require('../../config/app');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should;

describe("GET /usuario/signup", function() {
  it("Deve retornar codigo 412 ao não enviar dados, e retornar mensagens explicando erros.", function(done) {
    request(app)
    .post('/usuario/signup')
    .send({})
    .set('Content-Type', 'application/json')
    .expect('Content-Type', /json/)
    .expect(412)
    .end(function (err, res) {
      if (err) throw err;

      expect(res.body).to.be.an('array');

      res
      .body
      .forEach((error) => {
        expect(error.param).to.not.be.null;
        expect(error.msg).to.not.be.null;
      });

      done();
    });
  });

  it("Deve retornar codigo 412 ao não enviar email, e retornar mensagem dizendo 'Email é obrigatório.'", function(done) {
    request(app)
    .post('/usuario/signup')
    .send({
      usu_ds_senha: "123321"
    })
    .set('Content-Type', 'application/json')
    .expect('Content-Type', /json/)
    .expect(412)
    .end(function (err, res) {
      if (err) throw err;

      expect(res.body).to.be.an('array');

      var error = res.body[0];

      expect(error.param).to.equal("usu_ds_email");
      expect(error.msg).to.equal("Email é obrigatório.");

      done();
    });
  })

  it("Deve retornar codigo 412 ao não enviar senha, e retornar mensagem dizendo 'Senha é obrigatória.'", function(done) {
    request(app)
    .post('/usuario/signup')
    .send({
      usu_ds_email: "123321"
    })
    .set('Content-Type', 'application/json')
    .expect('Content-Type', /json/)
    .expect(412)
    .end(function (err, res) {
      if (err) throw err;

      var error = res.body[0];

      expect(error.param).to.equal("usu_ds_senha");
      expect(error.msg).to.equal("Senha é obrigatória.");

      expect(res.body).to.be.an('array');

      done();
    });
  });

  it("Deve retornar codigo 412 caso email seja inválido, e retornar mensagem dizendo que 'Formato do email é inválido.'", function(done) {
    var data = {
      usu_ds_email: "123321",
      usu_ds_senha: "asdfdssdaf"
    };

    request(app)
    .post('/usuario/signup')
    .send(data)
    .set('Content-Type', 'application/json')
    .expect('Content-Type', /json/)
    .expect(412)
    .end(function (err, res) {
      if (err) throw err;

      var error = res.body[0];

      expect(error.param).to.equal("usu_ds_email");
      expect(error.msg).to.equal(`Formato do email (${data.usu_ds_email}) é inválido.`);

      expect(res.body).to.be.an('array');

      done();
    });
  });
});
