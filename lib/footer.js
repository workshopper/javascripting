const path = require('path')
module.exports = [
  { text: '---', type: 'md' },
  { file: path.join(__dirname, '..', 'i18n', 'footer', '{lang}.md') },
  { text: '', type: 'md' },
  require('workshopper-adventure/default/footer')
]
