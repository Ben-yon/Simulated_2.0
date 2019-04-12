const Sequelize = require('sequelize');

module.exports = new Sequelize({
    database: "Test",
    username: "postgres",
    password: null,
    dialect: "postgres"
});