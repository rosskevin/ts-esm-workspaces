# ts-esm-workspaces

## TL;DR

WIP

## Status

WIP

## Goals

- A _publishable_ set of packages both cjs and esm (not just an internal build)
- Type checks and published types
- Typescript (with paths not project references?)
- Storybook
- Browser _and_ Node targeted modules reusing a `shared` library (all published)
- Faster and easier

## Strategy

- Vite - for fast bundles with storybook
- tsup - for fast library builds + typechecking/dts generation (still uses tsc for that)
- Yarn 2+ workspaces

## Previous issues

We are switching directions on this branch to Vite/tsup, but it is helpful to recall the issues on the [`main` branch](https://github.com/rosskevin/ts-esm-workspaces).

## Structure

- `client` - browser targeted tsconfig
- `cli` - node targeted tsconfig
- `shared` - code used by both environments

## VSCode

- Be sure to check the `.vscode` settings to setup the build task, and setup the preference to use the workspace's typescript sdk.

## Migrating to ESM

THIS branch is currently not migrating to ESM, but moving to Vite and hopefully a step forward, getting closer to ESM because it will produce cjs and esm packages.
