import { defineConfig } from 'tsup'

import common from '../../tsup.config'

export default defineConfig({
  ...common,
  // format: ['cjs'],
  entry: ['src/index.ts', 'src/bin/hello.ts'],
})
