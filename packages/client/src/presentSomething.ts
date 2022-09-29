import { appendMessage, inc } from '@rosskevin/ts-esm-workspaces-shared'

const count = 0

export function presentSomething() {
  return appendMessage(`Hello world ${inc(count)}`)
}
