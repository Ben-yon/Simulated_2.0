const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/',(res, req)=>
 res.send('INDEX')
);

const Port = process.env.PORT || 5000;

app.listen(Port, console.log(`Server started on port ${Port}`));