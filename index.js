const problem = require('./lib/problem')

var jsing = require('workshopper-adventure')({
  appDir: __dirname,
  languages: ['en', 'ja', 'ko', 'es', 'zh-cn', 'zh-tw', 'pt-br', 'nb-no', 'uk', 'it', 'ru', 'fr'],
  header: require('workshopper-adventure/default/header'),
  footer: require('./lib/footer.js')
})

jsing.addAll(require('./menu.json').map(function (name) {
  return {
    name,
    fn: function () {
      var p = name.toLowerCase().replace(/\s/g, '-')
      var dir = require('path').join(__dirname, 'problems', p)
      return problem(dir)
    }
  }
}))

module.exports = jsing
