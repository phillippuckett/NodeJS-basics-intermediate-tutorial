var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var port = 5555;

var app = express();

app.use(bodyParser.JSON());
app.use(middleware.addHeaders);

/** GET with GET */
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);

/** UPDATE with PUT */
app.put('/name', mainCtrl.updateName);
app.put('/location', mainCtrl.updateLocation);

/** ADD with POST */
app.post('/hobbies', mainCtrl.updateHobbies);
app.postt('/occupations', mainCtrl.updateOccupations);

/** SKILLS */
app.get('/skills?experience=Intermediate', mainCtrl.getSkills);
app.post('/skills', middleware.generateId, mainCtrl.postSkills);

/** SECRETS */
app.get('/secrets/:username/:pin', mainCtrl.getSecrets);

app.listen(port, function () {
    console.log("Listening on port, " + port)
});