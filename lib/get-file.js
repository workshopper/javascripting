var fs = require('fs');
var path = require('path');

module.exports = function (filepath) {
  return fs.readFileSync(filepath, 'utf8')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
};
