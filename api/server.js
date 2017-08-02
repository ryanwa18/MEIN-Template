// Set up
var express = require('express');
var app = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

// Configuration
mongoose.createConnection('mongodb://localhost/test');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT");
  res.header("Access-Control-Allow-Methods", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Model
var Item = mongoose.model('Item', {
  content: String
});

//Routes
app.get('/api/items', function(req, res) {
  console.log("Getting all items.");

  Item.find(function(err, items) {
    if (err)
      res.send(err);
    res.json(items);
  });
});

app.post('/api/items', function(req, res) {
  console.log("Creating a new item.");

  Item.create({
    content : req.body.content
  }, function(err, item) {
    if (err)
      res.send(err);
    Item.find(function(err, items) {
      if (err)
        res.send(err);
      res.json(items);
    });
  });
});

app.delete('/api/items', function(req, res) {
  console.log("Deleting an item.");

  Item.remove({
    _id : req.params.item_id
  }, function(err, item) {
    if (err)
      res.send(err);
  });
});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
