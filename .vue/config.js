const path = require('path')
module.exports = {
  port: 4001,
  html: {
    title: 'Vue Pluralize',
    template: path.join(__dirname, '../example/index.html')
  },
  filename: {
    js: 'vue-pluralize-filter.js',
  },
  webpack: {
    output: {
      path: path.join(__dirname, '../dist'),
      filename: 'vue-tachyons.js'
    }
  }
}
