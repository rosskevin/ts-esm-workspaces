/**
 * Simplest cli tool we can create
 */
import { inc } from '@rosskevin/ts-esm-workspaces-shared'
import * as shell from 'shelljs'

const count = 100
const message = `world ${inc(count)}`

shell.exec(`echo "${message}"`)
