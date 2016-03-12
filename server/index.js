const methodOverride = require('method-override');
const bodyParser  = require('body-parser');
const consign = require('consign');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

consign()
.include('models')
.then('controllers')
.then('routes')
.into(app)

app.listen(3000, () => console.log("Listening requests on 3000..."));
