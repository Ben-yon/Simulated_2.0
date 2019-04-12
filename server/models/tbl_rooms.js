const Sequelize = require('sequelize');
const db = require('../config/database');

const tbl_rooms = db.define('tbl_room',{
name: {
    type: Sequelize.STRING
},
capacity: {
    type: Sequelize.INTEGER
},
id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
createdAt:{
    type: Sequelize.TIME

},
updatedAt:{
    type: Sequelize.TIME
}   
});

module.exports = tbl_rooms