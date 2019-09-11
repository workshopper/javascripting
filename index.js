var jsing = require('workshopper-adventure')({
  appDir: __dirname,
  languages: ['en', 'ja', 'ko', 'es', 'zh-cn', 'zh-tw', 'pt-br', 'nb-no', 'uk', 'it', 'ru', 'fr'],
  header: require('workshopper-adventure/default/header'),
  footer: require('./lib/footer.js')
})

jsing.addAll(require('./menu.json').map(function (problem) {
  return {
    name: problem,
    fn: function () {
      var p = problem.toLowerCase().replace(/\s/g, '-')
      var dir = require('path').join(__dirname, 'problems', p)
      return require(dir)
    }
  }
}))

module.exports = jsing
