import fs from 'fs'
import path from 'path'
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json')))

export default [
  {
    input: pkg.source,
    plugins: [
      babel({
        babelrc: false,
        plugins: ['external-helpers'],
        presets: [['env', {modules: false}], 'react', 'stage-0']
      }),
      filesize()
    ],
    external: ['prop-types', 'react'],
    output: [
      {
        file: pkg.module,
        format: 'es'
      },
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        globals: {react: 'React', 'prop-types': 'PropTypes'},
        file: pkg.browser,
        format: 'umd',
        name: 'BulmaUI'
      }
    ]
  }
]
