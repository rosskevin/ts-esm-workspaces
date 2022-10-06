/* eslint-disable no-console */
/**
 * Simplest cli tool we can create - exercise esm as well
 */

import { inc } from '@rosskevin/ts-esm-workspaces-shared'
import { execaSync } from 'execa'
import { merge } from 'lodash-es'

const count = 100
const message = `world ${inc(count)}`

const { stdout } = execaSync('echo', [message])
console.log(stdout)

const foo = merge({}, { hello: 'world' })
console.log(foo)
