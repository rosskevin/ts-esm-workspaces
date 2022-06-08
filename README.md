# ts-esm-workspaces

## TL;DR - Don't do it...yet.

Ok, so I’ve finally gotten far enough converting our internal libraries to figure out that attempting to make a small utility library ESM is fine, but it’s _not feasible_ (as of 6/8/2022) for anything complex because something is inevitably going to be CJS and it will either not be loaded by node or via `"moduleResolution": "nodenext"`.

I have to go back to dual builds - One CJS and one ESM-like (but not totally), basically what we have been doing for years to allow for execution of node scripts that use CJS libraries as well as allow webpack to tree-shake ESM-like front end libraries.

## Status

It builds! (This is the same as saying "it works on my machine").

BUT when used in any larger application, it appears that you aren't going to feasibly be able to use `"moduleResolution": "nodenext"` for some time. If you use _any_ dependency that does not meet the ESM standard, you will have to switch to `"moduleResolution": "node"` and fake/hack the `main` in the `package.json` (at least for building purposes. I have a [test case on this branch](https://github.com/rosskevin/ts-esm-workspaces/tree/apollo-exports) and filed an issue with some helpful context here: https://github.com/microsoft/TypeScript/issues/49388

## Goals

- A _publishable_ set of packages (not just an internal build)
- Typescript project references
- Yarn 2+ workspaces
- ESM only modules that meet the specification (no fallbacks to CJS)
- Browser _and_ Node targeted modules reusing a `shared` library (all published)
- Follow the latest guidance from https://www.typescriptlang.org/docs/handbook/esm-node.html
- Build simply with `tsc -b`

## Previous issues

- [Exports map not recognized without `main` fallback](https://github.com/microsoft/TypeScript/issues/49266#issuecomment-1145219711) - this simply means you need to use `"moduleResolution": "nodenext"`.

## Structure

- `client` - browser targeted tsconfig
- `cli` - node targeted tsconfig
- `shared` - code used by both environments

## VSCode

- Be sure to check the `.vscode` settings to setup the build task, and setup the preference to use the workspace's typescript sdk.
- Add the following to aid with the ESM style imports:
  ```json
  {
    "javascript.preferences.importModuleSpecifierEnding": "js",
    "typescript.preferences.importModuleSpecifierEnding": "js"
  }
  ```

## Migrating to ESM

There are other resources out there, so I'll keep this brief to my key notes:

### Reading and references:

- [sindresorhus/esm-package gist](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
- [Jaid/migratingRules gist on eslint](https://gist.github.com/Jaid/164668c0151ae09d2bc81be78a203dd5)
- [Jest repo](https://github.com/facebook/jest/blob/main/package.json) a proper yarn workspaces example.

### Notes:

- You cannot use `.ts` extension in your imports, but strangely enough, if you add `.js` extension to a project that builds properly, vscode will allow you to `cmd+click` to go into the desired `.ts` file. Very strange, but ultimately the output in `dist` is then correct.
