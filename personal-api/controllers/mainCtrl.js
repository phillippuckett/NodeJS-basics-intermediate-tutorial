var personalApi = require('');

module.exports = {};

/* GET NAME //
exports.getName = function (req, res, next) {
    res.status(200).json({
        name: personalApi.name
    })
}; */

/* GET LOCATION //
exports.getLocation = function (req, res, next) {
    res.status(200).json({
        location: personalApi.location
    })
}; */

exports.getOccupations = function (req, res, next) {
    var occupations = personalApi.occupations;
    if (req.query.order === 'desc') {
        occupations = occupations.sort().reverse()
    } else if (req.query.order === 'asc') {
        occupations = occupations.sort();
    }
    res.status(200).json({ occupations: occupations });
};

/* GET LATEST OCCUPATIONS //
exports.getLatestOccupations = function (req, res, next) {
    var occupations = personalApi.occupations;
    var latestOccupations = occupations[occupations.length - 1];
    res.status(200).json({ latestOccupation: latestOccupations });
}; */

/* GET HOBBIES //
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
}; */

/* GET HOBBIES BY TYPE //
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
}; */
