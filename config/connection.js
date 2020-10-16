const Sequelize = require("sequelize");

const sequelize = new Sequelize ("pfs", "root", "morter706", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

// Export connection for our ORM to use.
module.exports = sequelize;