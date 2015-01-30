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

<<<<<<< HEAD
      if(err && err.code !== 8) {
        console.error(err);
=======
      if(err) {
        if(err.code !== 8) {
          console.error(err);
        }
>>>>>>> Added challenge word to some problems to difference the practice to explaination
        return cb(false);
      }

      if(solutionResult === attemptResult) {
        return cb(true);
      }

      cb(false, {
        solution: solutionResult,
<<<<<<< HEAD
        attempt:  err || attemptResult,
=======
        attempt:  attemptResult,
>>>>>>> Added challenge word to some problems to difference the practice to explaination
        diff:     generateDiff(solutionResult, attemptResult)
      });

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

<<<<<<< HEAD
}
=======
}
>>>>>>> Added challenge word to some problems to difference the practice to explaination
