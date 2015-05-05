var path = require('path');
var getFile = require('./get-file');
var compare = require('./compare-solution');

module.exports = function createProblem(dirname) {
  var exports = {};

  var problemName = dirname.split(path.sep);
  problemName = problemName[problemName.length-1];

  exports.init = function (workshopper) {
    var postfix = workshopper.lang === 'en' ? '' : '_' + workshopper.lang; 
    this.problem  = getFile(path.join(dirname, 'problem' + postfix + '.md'));
    this.solution = getFile(path.join(dirname, 'solution' + postfix + '.md'));
    this.solutionPath = path.resolve(dirname, "../../solutions", problemName, "index.js");
    this.troubleshootingPath = path.join(dirname, '../../i18n/troubleshooting' + postfix + '.md');
  }

  exports.verify = function (args, cb) {

    var attemptPath = path.resolve(process.cwd(), args[0]);
    compare(this.solutionPath, attemptPath, function(match, obj) {

      if(match) {
        return cb(true);
      }

      if(!obj) {
        // An error occured, we've already printed an error
        return;
      }

      var message = getFile(this.troubleshootingPath);

      message = message.replace(/%solution%/g, obj.solution);
      message = message.replace(/%attempt%/g, obj.attempt);
      message = message.replace(/%diff%/g, obj.diff);
      message = message.replace(/%filename%/g, args[0]);

      exports.fail = message;

      cb(false);

    }.bind(this));
  };

  exports.run = function (args) {
    require(path.resolve(process.cwd(), args[0]));
  };

  return exports;
}