const fs = require('fs')
const exec = require('child_process').exec

/**
 * @param {!string} filePath
 * @return {Promise}
 */
function exists (filePath) {
  return new Promise(function (resolve, reject) {
    fs.stat(filePath, function (err, d) {
      if (err) {
        resolve(false)
      }

      resolve(true)
    })
  })
}

/**
 * @param {!string} filePath
 * @return {Promise}
 */
function executeSolution (filePath) {
  return new Promise(function (resolve, reject) {
    exec('node "' + filePath + '"', function (err, stdout, stderr) {
      if (err) {
        return reject(err)
      }

      return resolve(stdout)
    })
  })
}

/**
 * @param {string} solutionPath
 * @param {!{__: function(string, object)}} i18n
 * @param {function} cb
 */
module.exports = function (solutionPath, i18n, cb) {
  exists(solutionPath).then(function (solutionExists) {
    if (!solutionExists) {
      throw new Error(i18n.__('error.exercise.missing_file', { exerciseFile: solutionPath }))
    }

    return executeSolution(solutionPath)
  }).then(function (stdout) {
    cb(null, stdout)
  }).catch(cb)
}
