const express = require('express')
const db = require('../config/database')
const Sequelize = require('sequelize')

const users = db.define('user',{
    name: {
        type: Sequelize.STRING,
         allowNull: false
},
    id:{
        type: Sequelize.INTEGER,
        primaryKey : true,
        AutoIncrement: true
    },
    security_question_id:{
        type: Sequelize.STRING,
        allowNull: false
    },
    security_question_answer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    activated:{
        type: Sequelize.BOOLEAN
    },
    dateupdated:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
      datecreated: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
});
 
module.exports = users;