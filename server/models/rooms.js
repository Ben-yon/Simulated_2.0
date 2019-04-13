const Sequelize = require('sequelize');
const db = require('../config/database');

const rooms = db.define('room',{
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
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

},
updatedAt:{
     type: 'TIMESTAMP',
         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

}   
});

module.exports = rooms