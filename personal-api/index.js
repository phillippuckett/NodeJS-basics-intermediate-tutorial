var express = require('express')
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var port = 5555;

var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeader);

app.listen(port, function (){
    console.log("Listening on port, " + port)
});