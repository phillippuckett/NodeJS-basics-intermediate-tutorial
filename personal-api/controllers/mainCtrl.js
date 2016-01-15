var personalApi = require('');

module.exports = {};

exports.getOccupations = function (req, res, next) {
    var occupations = personalApi.occupations;
    if (req.query.order === 'desc') {
        occupations = occupations.sort().reverse()
    } else if (req.query.order === 'asc') {
        occupations = occupations.sort();
    }
    res.status(200).json({ occupations: occupations });
};