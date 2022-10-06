// import { exec } from 'node:child_process'

import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,
  // dts: true,
  format: ['esm'], // 'cjs'],
  minify: true,
  // async onSuccess() {
  //   console.log(`DTS running tsc for types (in ${process.cwd()})...`)
  //   // const child = spawnSync('tsc --emitDeclarationOnly --declaration')
  //   // console.log('error', child.error)
  //   // console.log('stdout ', child.stdout)
  //   // console.log('stderr ', child.stderr)

  //   exec('tsc --emitDeclarationOnly --declaration', (err, stdout, stderr) => {
  //     // the *entire* stdout and stderr (buffered)
  //     if (stdout) console.log(stdout)
  //     if (stderr) console.log(stderr)
  //     if (err) {
  //       // node couldn't execute the command
  //       console.log(err)
  //       throw new Error('onSuccess failed.')
  //       // return
  //     }
  //   })
  // },
})

// tsup dts gen doesn't work with combo paths + project references.
// use tsup for dist (no types)
// use tsc for ide checking
// use tsc for types gen

// This is not working, figure it out

// Figured it out - tsc is looking at the `tsc -b` incremental files, and determining that it doesn't need to.
