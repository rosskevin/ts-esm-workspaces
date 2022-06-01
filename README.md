# ts-esm-workspaces

## BUG 49266?

https://github.com/microsoft/TypeScript/issues/49266

This branch `bug-main-required-to-build` demonstrates that a `main` field is required in the `package.json` even though the guidance in the [handbook](https://www.typescriptlang.org/docs/handbook/esm-node.html) states:

> Node.js supports a new field for defining entry points in package.json called "exports". This field is a more powerful alternative to defining "main" in package.json, and can control what parts of your package are exposed to consumers.

This branch demonstrates that the moment you remove the `main` on the `shared` project, the build will fail with:

```
~/p/ts-esm-workspaces ❯❯❯ yarn clean && yarn build
packages/client/src/presentSomething.ts:1:36 - error TS2307: Cannot find module '@rosskevin/ts-esm-workspaces-shared' or its corresponding type declarations.

1 import { inc, appendMessage } from "@rosskevin/ts-esm-workspaces-shared";
```

But with the `main` intact, resolution occurs and it builds witout error. Bug? Seems so from my perspective.

## Reproduction

`yarn install`

On this commit:

`yarn build` will error. This is because `shared` has no `main` field.

Compared to:

`git reset --hard HEAD~1 && yarn build`

---

## Goal

- A _publishable_ set of packages (not just an internal build)
- Typescript project references
- Yarn 2+ workspaces
- ESM only modules that meet the specification (no fallbacks to CJS)
- Browser _and_ Node targeted modules reusing a `shared` library (all published)
- Follow the latest guidance from https://www.typescriptlang.org/docs/handbook/esm-node.html
- Build simply with `tsc -b`

## Current issues

- `main` in `project.json` is required for building. This is invalid, as this is an ESM-only module and there should be no fallback at all to CJS (because one does not exist). It seems like a false flag pretending to be CJS, when this seems like a Typescript resolution error instead.

## Status

- `tsc -b` works, but only with the above `main` issue caveat. Still more to do and try.
  > Node.js supports a new field for defining entry points in package.json called "exports". This field is a more powerful alternative to defining "main" in package.json, and can control what parts of your package are exposed to consumers.

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
