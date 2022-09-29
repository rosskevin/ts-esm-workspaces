# ts-esm-workspaces

## TL;DR

WIP

## Status

WIP

## Goals

- A _publishable_ set of packages (not just an internal build)
- Vite - for fast bundles with storybook
- tsup - for fast library builds + typechecking/dts generation (still uses tsc for that)
- Typescript (with paths not project references?)
- Storybook
- Yarn 2+ workspaces
- Browser _and_ Node targeted modules reusing a `shared` library (all published)
- Type checks and published types

## Previous issues

We are switching directions on this branch to Vite/tsup, but it is helpful to recall the issues on the [`main` branch](https://github.com/rosskevin/ts-esm-workspaces).

## Structure

- `client` - browser targeted tsconfig
- `cli` - node targeted tsconfig
- `shared` - code used by both environments

## VSCode

- Be sure to check the `.vscode` settings to setup the build task, and setup the preference to use the workspace's typescript sdk.

## Migrating to ESM

THIS branch is currently not migrating to ESM, but moving to Vite and hopefully a step forward, getting closer to ESM.
