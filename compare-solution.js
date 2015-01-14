require("colors");

var path = require("path");
var diff = require("diff");
var run  = require(path.join(__dirname, "run-solution"));

module.exports = function(solution, attempt, cb) {
  
  run(solution, function(err, solutionResult) {

    if(err) {
      console.error(err);
      return cb(false);
    }

    run(attempt, function(err, attemptResult) {

      if(err) {
        if(err.code !== 8) {
          console.error(err);
        }
        return cb(false);
      }

      if(solutionResult === attemptResult) {
        return cb(true);
      }

      console.error("\nSolution:\n------------------------");
      console.error(solutionResult);
      console.error("Your attempt:\n------------------------");
      console.error(attemptResult);
      console.error("Difference:\n------------------------");
      console.error(generateDiff(solutionResult, attemptResult));

      cb(false);

    });

  });

}

function generateDiff(solution, attempt) {

  var parts = diff.diffChars(solution, attempt);

  var result = "";

  parts.forEach(function(part) {

    if(part.added) {
      result += part.value["bgRed"];
    } else if(part.removed) {
      result += part.value["bgGreen"];
    } else {
      result += part.value;
    }

  });

  return result;

}