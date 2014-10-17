var fs = require('fs');
var path = require('path');
var md = require('cli-md');

module.exports = function (filepath) {
  return md(fs.readFileSync(filepath, 'utf8'))
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
};
