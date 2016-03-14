var fs = require('fs');
var path = require('path');
var docs = path.join(__dirname, 'docs');
var exec = require('child_process').exec;

if (typeof Promise === 'undefined') {
  var Promise = require('promise');
}

/**
 * @param {!string} filePath
 * @return {Promise}
 */
function exists(filePath) {
  return new Promise(function(res, rej) {
    fs.stat(filePath, function(err, d) {
      if (err) {
        res(false);
      }

      res(true);
    });
  });
}

/**
 * @param {!string} filePath
 * @return {Promise}
 */
function executeSolution(filePath) {
  return new Promise(function(res, rej) {
    exec('node "' + filePath + '"', function (err, stdout, stderr) {
      if (err) {
        return rej(err);
      }

      return res(stdout);
    });
  });
}


/**
 * @param {string} solutionPath
 * @param {!{__: function(string, object)}} i18n
 * @param {function} cb
 */
module.exports = function (solutionPath, i18n, cb) {
  exists(solutionPath).then(function(solutionExists) {
    if (!solutionExists) {
      throw new Error(i18n.__('error.exercise.missing_file', {exerciseFile: solutionPath}));
    }

    return executeSolution(solutionPath);
  }).then(function(stdout) {
    cb(null, stdout);
  }).catch(cb);
}
