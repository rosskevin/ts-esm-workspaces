// eslint-disable-next-line import/no-commonjs, unicorn/prefer-module
const rimraf = require('rimraf')

rimraf('./packages/*/dist/**/*.{js,js.map}', (error) => {
  if (error) {
    throw error
  }
})

// remove incremental build metadata - as it is no longer valid.
rimraf('./**/tsconfig.tsbuildinfo', (error) => {
  if (error) {
    throw error
  }
})
