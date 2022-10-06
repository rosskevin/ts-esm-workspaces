/**
 * Simplest cli tool we can create
 */
import { inc } from '@rosskevin/ts-esm-workspaces-shared'
import { merge } from 'lodash'
import * as shell from 'shelljs'

const count = 100
const message = `world ${inc(count)}`

const foo = merge({}, { hello: 'world' })

shell.exec(`echo "${message}"`)

// eslint-disable-next-line no-console
console.log(foo)
