console.log('the server is running');

var express = require('express'); // brings in the express library
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

app.use(bodyParser.urlencoded({extended: true})); // you need this line of code to go with line 5. This creates req.body.

app.use(express.static('server/public'));


app.post('/add', function(req, res){
  var newFish = req.body; // body parser creates .body // relates back to our new newFishObject on the client side
  fishiesList.push(newFish);
  console.log(fishiesList);
  res.sendStatus(200);
});


function add(x, y){
total = x + y;
return total;
}

function subtract(x, y){
total = x - y;
return total;
}

function multiply(x, y){
total = x * y;
return total;
}

function divide(x, y){
total = x / y;
return total;
}

app.listen(port);
