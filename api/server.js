const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const DB = require('./DB');
const mongoose = require('mongoose');
require('./routes/contacts.route')(app);  


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(DB.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome to PhoneBook app"});
});

// listen on port 3000
app.listen(DB.serverport, () => {
  console.log("Server is listening on port 3000");
});