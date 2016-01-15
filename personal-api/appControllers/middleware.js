var personalApi = require('');

module.exports = {}

exports.myFunction = function (req, res) {};
exports.anotherFunction = function (req, res) {};
exports.addHeaders = function (req, res, next) {
    res.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
    next();
};
