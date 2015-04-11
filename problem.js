var path = require('path');
var getFile = require('./get-file');
var compare = require('./compare-solution');

module.exports = function createProblem(dirname) {
  var exports = {};

  var problemName = dirname.split(path.sep);
  problemName = problemName[problemName.length-1];

  exports.problem  = getFile(path.join(dirname, 'problem.md'));
  exports.solution = getFile(path.join(dirname, 'solution.md'));

  var solutionPath = path.resolve(dirname, "../../solutions", problemName, "index.js");
  var troubleshootingPath = path.join(dirname, '../../troubleshooting.md');

  exports.verify = function (args, cb) {

    var attemptPath = path.resolve(process.cwd(), args[0]);
    compare(solutionPath, attemptPath, function(match, obj) {

      if(match) {
        return cb(true);
      }

      if(!obj) {
        // An error occured, we've already printed an error
        return;
      }

      var message = getFile(troubleshootingPath);

      message = message.replace(/%solution%/g, obj.solution);
      message = message.replace(/%attempt%/g, obj.attempt);
      message = message.replace(/%diff%/g, obj.diff);
      message = message.replace(/%filename%/g, args[0]);

      exports.fail = message;

      cb(false);

    });
  };

  exports.run = function (args) {
    require(path.resolve(process.cwd(), args[0]));
  };

  return exports;
}