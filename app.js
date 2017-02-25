console.log('the server is running');

var express = require('express'); // brings in the express library
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

app.use(bodyParser.urlencoded({extended: true})); // you need this line of code to go with line 5. This creates req.body.

app.use(express.static('server/public'));


app.listen(port);
