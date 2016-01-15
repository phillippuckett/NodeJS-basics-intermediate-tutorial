var express = require('express')
var bodyParser = require('body-parser');

var port = 5555;

var app = express();

app.use(bodyParser.json());

app.listen(port, function (){
    console.log("Listening on port, " + port)
});