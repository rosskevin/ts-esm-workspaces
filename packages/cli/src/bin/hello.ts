/* eslint-disable no-console */
/**
 * Simplest cli tool we can create - exercise esm as well
 */

import { Logger } from '@alienfast/logger'
import { initializeNodeLogger } from '@alienfast/logger-node'
import { inc } from '@rosskevin/ts-esm-workspaces-shared'
import { execaSync } from 'execa'
import { merge } from 'lodash-es'

initializeNodeLogger()

const log = Logger.get('hello')

const count = 100
const message = `world ${inc(count)}`

const { stdout } = execaSync('echo', [message])
console.log(stdout)

const foo = merge({}, { hello: 'world' })
console.log(foo)

log.info('Some logged message.')
