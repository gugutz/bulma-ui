const path = require('path')
const {createConfig, match} = require('@webpack-blocks/webpack')
const babel = require('@webpack-blocks/babel')
const {css, file} = require('@webpack-blocks/assets')

function capitalize(str) {
  return str[0].toUpperCase() + str.substr(1)
}

module.exports = {
  webpackConfig: createConfig([
    match(['*.js', '!*node_modules*'], [babel()]),
    css(),
    match(['*.eot', '*.ttf', '*.woff', '*.woff2', '*.svg', '*.otf'], [file()])
  ]),
  require: [
    'babel-polyfill',
    'bulma/css/bulma.css',
    'font-awesome/css/font-awesome.css',
    '@mdi/font/css/materialdesignicons.css',
    'open-iconic/font/css/open-iconic.css',
    'ionicons/dist/css/ionicons.css'
  ],
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.examples.md')
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    return `import {${capitalize(name)}} from 'bulma-ui'`
  }
}
