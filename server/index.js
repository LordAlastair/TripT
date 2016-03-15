'use strict';

const app = require('./config/app');
const models = require("./models");

models
.sequelize
.sync()
.then(function() {
  app.listen(3000, () => console.log("Listening requests on 3000..."));
});
