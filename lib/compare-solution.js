require('colors')

const path = require('path')
const diff = require('diff')
const run = require(path.join(__dirname, 'run-solution'))

module.exports = function (solution, attempt, i18n, cb) {
  run(solution, i18n, function (err, solutionResult) {
    if (err) {
      console.error(err)
      return cb(err, false)
    }

    run(attempt, i18n, function (err, attemptResult) {
      if (err && err.code !== 8) {
        console.error(err)
        return cb(err, false)
      }

      if (solutionResult === attemptResult) {
        return cb(err, true)
      }

      cb(null, false, {
        solution: solutionResult,
        attempt: err || attemptResult,
        diff: generateDiff(solutionResult, attemptResult)
      })
    })
  })
}

function generateDiff (solution, attempt) {
  const parts = diff.diffChars(solution, attempt)

  let result = ''

  parts.forEach(function (part) {
    if (part.added) {
      result += part.value.bgRed
    } else if (part.removed) {
      result += part.value.bgGreen
    } else {
      result += part.value
    }
  })

  return result
}
