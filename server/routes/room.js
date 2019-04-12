const express = require('express');
const router = express.Router();
const db = require('../config/database');
const tbl_rooms = require('../models/tbl_rooms');

router.get('/', (req,res)=> 
tbl_rooms.findAll()
.then(room => {
    console.log(room);
    res.sendStatus(200);
})
.catch(err=> console.log(err))
);

module.exports = router