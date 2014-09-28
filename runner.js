#!/usr/bin/env node
var adventure = require('adventure');
var jsing = adventure('javascripting');

var problems = [
  'intro',
  'strings',
  'string-methods',
  'numbers',
  'number-methods',
  'arrays',
  'array-methods',
  'objects',
  'object-methods',
  'functions',
  'this',
  'scope'
];

problems.forEach(function (prob) {
  jsing.add(prob, function () {
    return require('./problems/' + prob);
  });
});

jsing.execute(process.argv.slice(2));
