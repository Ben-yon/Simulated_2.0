const express = require('express')
const router = express.Router();
const users = require('../models/user')
const db = require('../config/database')

router.get('/', (req,res)=>{
    users.findAll()
    .then(user => { 
        console.log(user);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
})


module.exports = users