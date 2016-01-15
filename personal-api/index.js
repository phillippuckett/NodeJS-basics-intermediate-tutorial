var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var port = 5555;

var app = express();

app.use(bodyParser.JSON());
app.use(middleware.addHeaders);

// GET with GET //
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', middleware.getHobbiesByType);

// UPDATE with PUT//
app.put('/name', middleware.updateName);
app.put('/location', mainCtrl.updateLocation);

// ADD with POST //
app.post('/hobbies', mainCtrl.updateHobbies);
app.postt('/occupations', mainCtrl.updateOccupations);

app.listen(port, function () {
    console.log("Listening on port, " + port)
});