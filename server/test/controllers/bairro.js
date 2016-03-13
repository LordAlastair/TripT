const app = require('../../config/app');
const request = require('supertest');
const expect = require('chai').expect;

var arrayBairros = [];

describe("GET /bairro", function() {
	it("deve retornar um json array", function(done) {
		request(app)
		.get('/bairro')
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function (err, res) {
			if (err)
				throw err;

			expect(res.body).to.be.an('array');

			arrayBairros = res.body;

			done();
		});
	});
});

describe("GET /bairro/:id", function() {
	it("deve retornar um json object", function(done) {
		request(app)
		.get('/bairro/' + arrayBairros[0].bai_cd_bairro)
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function (err, res) {
			if (err)
				throw err;

			expect(res.body).to.be.a('object');

			done();
		});
	});
});
