#!/usr/bin/env node

var path = require('path');
var adventure = require('adventure');
var jsing = adventure('javascripting');

var problems = require('./menu.json');

problems.forEach(function (prob) {
  var p = prob.toLowerCase().replace(' ', '_');
  var dir = path.join(__dirname, 'problems', p);
  jsing.add(prob, function () { return require(dir); });
});

jsing.execute(process.argv.slice(2));
