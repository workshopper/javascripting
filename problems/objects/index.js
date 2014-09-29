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

var expected = "{ toppings: [ 'cheese', 'sauce', 'pepperoni' ],\n"
  + "  crust: 'deep dish',\n"
  + "  serves: 2 }\n";

exports.verify = function (args, cb) {
  run(args[0], function (err, result) {    
    if (result === expected) cb(true);
    else cb(false);
  });
};
