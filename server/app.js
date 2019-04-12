const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const db = require('./config/database');



//test db
db.authenticate()
.then(() => console.log('...database connected'))
.catch(err => console.log('Error' + err))


const app = express();

app.get('/', (req, res) =>
    res.send('INDEX')
);

// rooms router  
app.use('/room', require('./routes/room'))

const Port = process.env.PORT || 5000;

app.listen(Port, console.log(`Server started on port ${Port}`));