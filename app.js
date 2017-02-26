console.log('the server is running');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));


app.post('/subtract', function(req, res){
  var newObject = req.body; // assigning new object to variable to access properties
  var subtractTotal = subtract(newObject.x, newObject.y); // calling subtract function
  var finalSubtractTotal = subtractTotal.toString();
  res.send(finalSubtractTotal);

  function subtract(x, y){ // function to complete subtraction
    var total = x - y;
    return total;
  }
  res.sendStatus(200);
}); // end of app.post function




// function add(x, y){
// total = x + y;
// return total;
// }

// function multiply(x, y){
// total = x * y;
// return total;
// }
//
// function divide(x, y){
// total = x / y;
// return total;
// }

app.listen(port);
