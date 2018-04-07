const path = require('path')
const {createConfig, babel, css} = require('webpack-blocks')

function capitalize(str) {
  return str[0].toUpperCase() + str.substr(1)
}

module.exports = {
  webpackConfig: createConfig([babel(), css()]),
  require: ['babel-polyfill', 'bulma/css/bulma.css'],
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.examples.md')
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    return `import {${capitalize(name)}} from 'bulma-ui'`
  }
}
