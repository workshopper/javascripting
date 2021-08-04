const path = require('path')
const fs = require('fs')
const problem = require('./lib/problem')

const i18nDir = path.join(__dirname, 'i18n')
const languages = ['en'].concat(fs.readdirSync(i18nDir)
  .filter((f) => f.match(/\w+\.json/))
  .map((f) => f.replace('.json', ''))
)
const jsing = require('workshopper-adventure')({
  appDir: __dirname,
  languages,
  header: require('workshopper-adventure/default/header'),
  footer: require('./lib/footer.js')
})

jsing.addAll(require('./menu.json').map(function (name) {
  return {
    name,
    fn: function () {
      const p = name.toLowerCase().replace(/\s/g, '-')
      const dir = require('path').join(__dirname, 'problems', p)
      return problem(dir)
    }
  }
}))

module.exports = jsing
