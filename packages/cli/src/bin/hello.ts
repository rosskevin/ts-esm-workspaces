/**
 * Simplest cli tool we can create
 */
import shell from "shelljs";
import { inc, appendMessage } from "@rosskevin/ts-esm-workspaces-shared";

let count = 100
const message = `world ${inc(count)}`

shell.exec(`echo "${message}"`);
