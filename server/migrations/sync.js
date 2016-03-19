const models = require("../models");

models.sequelize.sync({ force: true }).then(function() {
  console.log("Entidades sincronizadas.")
  process.exit();
});
