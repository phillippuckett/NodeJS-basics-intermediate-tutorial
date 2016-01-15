var personalApi = require('');

module.exports = {};

/** GET */
exports.getName = function (req, res, next) {
    res.status(200).json({
        name: personalApi.name
    })
};

exports.getLocation = function (req, res, next) {
    res.status(200).json({
        location: personalApi.location
    })
};

exports.getOccupations = function (req, res, next) {
    var occupations = personalApi.occupations;
    if (req.query.order === 'desc') {
        occupations = occupations.sort().reverse()
    } else if (req.query.order === 'asc') {
        occupations = occupations.sort();
    }
    res.status(200).json({ occupations: occupations });
};

exports.getLatestOccupations = function (req, res, next) {
    var occupations = personalApi.occupations;
    var latestOccupations = occupations[occupations.length - 1];
    res.status(200).json({ latestOccupation: latestOccupations });
};

exports.getHobbies = function (req, res, next) {
    var hobbies = personalApi.hobbies;
    if (req.query.order === 'desc') {
        hobbies = hobbies.sort(function (x, y) {
            if (x.name < y.name) {
                return 1;
            } else if (x.name = y.name) {
                return 0;
            } else {
                return -1;
            }
        });

    } else if (req.query.order === 'asc') {
        hobbies = hobbies.sort(function (x, y) {
            if (x.name < y.name) {
                return 1;
            } else if (x.name = y.name) {
                return 0;
            } else {
                return -1;
            }
        });
    }
    res.status(200).json({ hobbies: hobbies });
};

exports.getHobbiesByType = function (res, req, next) {
    var hobbies = personalApi.hobbies;
    var type = req.params.type;
    var hobbiesByType = [];

    for (var i = 0; i < hobbies.length; i++) {
        var currentHobby = hobbies[i];
        if (currentHobby.type === type) {
            hobbiesByType.push(currentHobby);
        }
    }
    res.status(200).json({ hobbiesByType: hobbiesByType });
};


/** UPDATE with PUT */
exports.updateName = function (req, res, next) {
    var newName = req.body.name;
    personalApi.name = newName;
    res.status(200).json({ name: newName });
};

exports.updateLocation = function (req, res, next) {
    var newLocation = req.body.name;
    personalApi.name = newLocation;
    res.status(200).json({ location: newLocation });
};

/** ADD with POST */
exports.addHobby = function (req, res, next) {
    var addingHobby = req.body.hobbies;
    personalApi.hobbies.push(addingHobby);
    res.status(200).json({ hobbies: personalApi.hobbies });
};

exports.addOccupation = function (req, res, next) {
    var addingOccupation = req.body.occupation;
    personalApi.occupations.push(addingOccupation);
    res.status(200).json({ occupations: personalApi.occupations });
};