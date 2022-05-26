import { inc, appendMessage } from "@rosskevin/ts-esm-workspaces-shared";

let count = 0

export function presentSomething() {
  return appendMessage(`Hello world ${inc(count)}`)
}