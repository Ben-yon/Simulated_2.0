const Sequelize = require('sequelize');

module.exports = new Sequelize({
    database: "timetable",
    username: "postgres",
    password: null,
    dialect: "postgres"
});