/* eslint-disable standard/no-callback-literal */

var path = require('path')
var getFile = require('./get-file')
var compare = require('./compare-solution')

module.exports = function createProblem (dirname) {
  var exports = {}

  var problemName = dirname.split(path.sep)
  var i18n

  problemName = problemName[problemName.length - 1]

  exports.init = function (workshopper) {
    i18n = workshopper.i18n
    var postfix = workshopper.i18n.lang() === 'en' ? '' : '_' + workshopper.i18n.lang()
    this.problem = { file: path.join(dirname, 'problem' + postfix + '.md') }
    this.solution = { file: path.join(dirname, 'solution' + postfix + '.md') }
    this.solutionPath = path.resolve(__dirname, '..', 'solutions', problemName, 'index.js')
    this.troubleshootingPath = path.join(__dirname, '..', 'i18n', 'troubleshooting' + postfix + '.md')
  }

  exports.verify = function (args, cb) {
    var attemptPath = path.resolve(process.cwd(), args[0])
    compare(this.solutionPath, attemptPath, i18n, function (match, obj) {
      if (match) {
        return cb(true)
      }

      if (!obj) {
        // An error occured, we've already printed an error
        return
      }

      var message = getFile(this.troubleshootingPath)

      message = message.replace(/%solution%/g, obj.solution)
      message = message.replace(/%attempt%/g, obj.attempt)
      message = message.replace(/%diff%/g, obj.diff)
      message = message.replace(/%filename%/g, args[0])

      exports.fail = [
        { text: message, type: 'md' },
        require('./footer.js')
      ]

      cb(false)
    }.bind(this))
  }

  return exports
}
