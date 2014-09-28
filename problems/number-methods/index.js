var md = require('cli-md');
var path = require('path');
var fs = require('fs');

exports.problem = md(
  fs.readFileSync(path.join(__dirname, 'readme.md'), 'utf8')
);

exports.verify = function (args, cb) {
  if (/answer/.test(args)) {
    console.log('correct\n');
    cb(true);
  }
  else if (/otheranswer/i.test(args)) {
    console.log('almost\n');
    cb(false);
  }
  else {
    console.log('nope.\n');
    cb(false);
  }
};
