// Set up
var express = require('express');
var app = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb

// Configuration
mongoose.connect('mongodb://localhost/test');


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");