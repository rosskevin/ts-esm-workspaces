# ts-esm-workspaces

** WORK IN PROGRESS **
GOAL: typescript project references + esm modules + yarn workspaces to simply produce a set of interdependent libraries. This should be compliant with the latest from https://www.typescriptlang.org/docs/handbook/esm-node.html

** OLD BELOW HERE **

Demo app for ES Modules monorepo using:

- Yarn workspaces
- Typescript project references
- ts-node esm modules loading

There are three packages

- client (this is the browser code in react)
- server (this is the server-side code for nodejs)
- shared (this code is used by both client and server packages)
