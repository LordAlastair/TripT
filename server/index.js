'use strict';

const port = process.env.PORT || 3000;

const app = require('./config/app');
const models = require("./models");

models
.sequelize
.sync()
.then(function() {
  app.listen(port, () => console.log(`Listening requests on ${port}...`));
});
