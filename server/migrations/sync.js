const models = require("../models");

models.sequelize.sync().then(function() {
  console.log("Entidades criadas.")
  process.exit();
});
