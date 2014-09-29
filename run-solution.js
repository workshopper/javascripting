var fs = require('fs');
var path = require('path');
var docs = path.join(__dirname, 'docs');
var exec = require('child_process').exec;

module.exports = function (solution, cb) {
  var child = exec('node ' + solution, function (error, stdout, stderr) {
    if (error) return cb(error);
    else cb(null, stdout);
  });
};
