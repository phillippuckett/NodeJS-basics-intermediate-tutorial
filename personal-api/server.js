var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var port = 5555;

var app = express();

app.use(bodyParser.JSON());
app.use(middleware.addHeaders);

app.get('/name', middleware.getName);
app.get('/location', middleware.getLocation);
app.get('/occupations', middleware.getOccupations);
app.get('/occupations/latest', middleware.getLatestOccupation);
app.get('/hobbies', middleware.getHobbies);
app.get('/hobbies/:type', middleware.getHobbiesByType);

app.listen(port, function (){
    console.log("Listening on port, " + port)
});