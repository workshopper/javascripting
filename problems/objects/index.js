var path = require('path');
var getFile = require('../../get-file');
var run = require('../../run-solution');

exports.problem = getFile(path.join(__dirname, 'problem.md'));

exports.solution = getFile(path.join(__dirname, 'solution.md'));

exports.fail = getFile(path.join(__dirname, 'troubleshooting.md'));

var expected = "{ toppings: [ 'cheese', 'sauce', 'pepperoni' ],\n"
  + "  crust: 'deep dish',\n"
  + "  serves: 2 }\n";

exports.verify = function (args, cb) {
  run(args[0], function (err, result) {    
    if (result === expected) cb(true);
    else cb(false);
  });
};
