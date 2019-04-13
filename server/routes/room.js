const express = require('express');
const router = express.Router();
const db = require('../config/database');
const rooms = require('../models/rooms');

router.get('/', (req,res)=> 
rooms.findAll()
.then(room => {
    console.log(room);
    res.sendStatus(200);
})
.catch(err=> console.log(err))
);

// add a room 
router.get('/add',(req,res)=>{
    const data = {
        name: "Ikeh Michael",
        capacity: "50",

        
    }

    let { name,capacity  } = data;
    // insert into table
    rooms.create({
        name,
        capacity,
        
    })
    .then(room=> res.redirect('/room'))
    .catch(err=> console.log(err))

});

module.exports = router