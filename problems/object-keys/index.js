var path = require('path');
var getFile = require('../../get-file');
var compare = require('../../compare-solution');

exports.problem = getFile(path.join(__dirname, 'problem.md'));

exports.solution = getFile(path.join(__dirname, 'solution.md'));

exports.fail = getFile(path.join(__dirname, 'troubleshooting.md'));

var solutionPath = path.resolve(__dirname, "../../solutions/object-keys/index.js");

exports.verify = function (args, cb) {
  var attemptPath = path.resolve(process.cwd(), args[0]);
  compare(solutionPath, attemptPath, cb);
};

exports.run = function (args) {
  require(path.resolve(process.cwd(), args[0]));
};
