console.log('the server is running');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.post('/add', function(req, res){
  var newObject = req.body;
  var x = Number(newObject.x);
  var y = Number(newObject.y);
  var addTotal = add(x, y);
  function add(x, y){
    var total = x + y;
    return total;
  }
  res.send(addTotal.toString());
});

app.post('/subtract', function(req, res){
  var newObject = req.body; // assigning new object to variable to access properties
  var subtractTotal = subtract(newObject.x, newObject.y); // calling subtract function
  function subtract(x, y){ // function to complete subtraction
    var total = x - y;
    return total;
  }
  res.send(subtractTotal.toString());
});

app.post('/multiply', function(req, res){
  var newObject = req.body;
  var multiplyTotal = multiply(newObject.x, newObject.y);
  function multiply(x, y){
    var total = x * y;
    return total;
  }
  res.send(multiplyTotal.toString());
});

app.post('/divide', function(req, res){
  var newObject = req.body;
  var divideTotal = divide(newObject.x, newObject.y);
  function divide(x, y){
    var total = x / y;
    return total;
  }
  res.send(divideTotal.toString());
});

app.listen(port);
