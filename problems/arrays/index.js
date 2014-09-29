var assert = require('assert');
var fs = require('fs');
var path = require('path');
var md = require('cli-md');
var run = require('../../run-solution');

exports.problem = md(
  fs.readFileSync(path.join(__dirname, 'problem.md'), 'utf8')
);

exports.solution = md(
  fs.readFileSync(path.join(__dirname, 'solution.md'), 'utf8')
);

exports.verify = function (args, cb) {
  run(args[0], function (err, result) {
    var expected = "[ 'tomato sauce', 'cheese', 'pepperoni' ]\n";
    if (result.replace('"', "'") === expected) cb(true);
    else cb(false);
  });
};