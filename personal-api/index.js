var express = require('express');
var bodyParser = require('body-parser');
var mainCtrl = require('./interface/js/mainCtrl.js');
var middleware = require('./interface/js/middleware.js');

var port = 3000;

var app = express();

app.use(bodyParser.JSON());
app.use(middleware.addHeaders);

app.get('/name', middleware.getName);
app.get('/location', middleware.getLocation);
app.get('/occupations', middleware.getOccupations);
app.get('/occupations/latest', middleware.getLatestOccupation);
app.get('/hobbies', middleware.getHobbies);
app.get('/hobbies/:type', middleware.getHobbyType);

app.listen(port, function (){
    console.log("Listening on port, " + port)
});