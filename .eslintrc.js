// eslint-disable-next-line import/no-commonjs, unicorn/prefer-module
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'simple-import-sort',
    'import',
    'unused-imports',
    'n',
    'unicorn',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/react',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  env: {
    es2022: true, // adds all ECMAScript 2022 globals and automatically sets the ecmaVersion parser option to 13.
    browser: true, // adds browser global variables.
    node: true, // adds Node.js global variables and Node.js scoping.
  },
  parserOptions: {
    project: [
      './tsconfig.json', // for config files etc, outside of src directories
      './packages/*/tsconfig.json' // all code in src directories
    ],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules', 'packages/*/lib'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        // project: 'packages/*/tsconfig.json',
        project: ['packages/*/tsconfig.json'],
        // project: 'tsconfig.lint.json',
      },
    },
  },
  rules: {
    //---------------------------------------------
    // eslint
    //
    'guard-for-in': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-console': 'error',
    'no-eval': 'error',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    // note you must disable the base rule as it can report incorrect errors
    'require-await': 'off',
    'sort-keys': 'off', // just too painful with css class ordering to have to ignore most files
    'sort-imports': 'off', // use simple-import-sort instead

    //---------------------------------------------
    // typescript-eslint
    //
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/camelcase': 'off', // apollo generated files
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        overrides: {
          constructors: 'no-public',
        },
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-misused-promises': [
    //   'error',
    //   {
    //     checksVoidReturn: false,
    //   },
    // ],
    '@typescript-eslint/no-misused-promises': 'off', // costly in terms of time and not used much, even ignored where used.
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/unbound-method': 'off', // takes 73s on js!  63% of the timing!
    '@typescript-eslint/unified-signatures': 'error',

    //---------------------------------------------
    // simple-import-sort
    //
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    //---------------------------------------------
    // eslint-plugin-import
    //
    'import/no-unresolved': 'error', // does not work with file extensions as of 6/8/2022
    'import/first': 'error', // disallow non-import statements appearing before import statements
    'import/no-duplicates': 'error', // auto-fix merge into single line
    'import/extensions': 'error', // Ensure consistent use of file extension within the import path.
    'import/no-useless-path-segments': 'error', // Prevent unnecessary path segments in import and require statements. (autofix)
    'import/no-commonjs': 'error', // Report CommonJS require calls and module.exports or exports.*.
    'import/newline-after-import': 'error', // Require a newline after the last import/require in a group
    'import/no-absolute-path': 'error', // Forbid import of modules using absolute paths
    'import/no-amd': 'error', // disallow AMD require/define
    'import/no-default-export': 'off', // forbid default exports (more difficult to import, rename, etc), but onerous on the whole with stories, routes etc
    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        peerDependencies: true,
        optionalDependencies: false,
      },
    ],

    'import/no-mutable-exports': 'error', // Forbid mutable exports
    'import/named': 'off', // not needed - ts does this
    'import/no-named-default': 'off', // Prevent importing the default as if it were named
    'import/no-named-export': 'off', // Prohibit named exports, we want everything to be a named export
    'import/no-self-import': 'error', // Forbid a module from importing itself
    'import/order': 'off', // use the simple-import-sort instead
    'import/prefer-default-export': 'off', // we want everything to be named

    //---------------------------------------------
    // eslint-plugin-unused-imports
    //
    // 'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    // 'unused-imports/no-unused-vars': [
    //   'warn',
    //   { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    // ],

    //---------------------------------------------
    // eslint-plugin-node (use this to setup for esm transition)
    //
    'n/no-missing-import': 'off', // disallow import declarations which import non-existence modules - does not work with file extensions in ts, needs updated like the file-extensions rule
    'n/no-extraneous-import': 'error', // disallow import declarations which import extraneous modules
    'n/file-extension-in-import': 'off', // enforce the style of file extensions in import declarations (autofix) - only good for initial fixing, otherwise errors on some paths https://github.com/weiran-zsd/eslint-plugin-node/issues/21

    //---------------------------------------------
    // eslint-plugin-unicornd (setup for esm transition) https://gist.github.com/Jaid/164668c0151ae09d2bc81be78a203dd5
    //
    'unicorn/prefer-module': 'error', // Prefer JavaScript modules (ESM) over CommonJS. (autofix)
    'unicorn/prefer-node-protocol': 'error', // Prefer using the node: protocol when importing Node.js builtin modules.
    'unicorn/prefer-top-level-await': 'error', // Prefer top-level await over top-level promises and async function calls.

    //---------------------------------------------
    // eslint-plugin-eslint-comment
    //

    // require a eslint-enable comment for every eslint-disable comment
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
    'eslint-comments/no-aggregating-enable': 'error', // disallow a eslint-enable comment for multiple eslint-disable comments
    'eslint-comments/no-duplicate-disable': 'error', // disallow duplicate eslint-disable comments
    'eslint-comments/no-unlimited-disable': 'off', // disallow eslint-disable comments without rule names - default generated in apollo
    'eslint-comments/no-unused-disable': 'error', // disallow unused eslint-disable comments
    'eslint-comments/no-unused-enable': 'error', // disallow unused eslint-enable comments
    // disallow ESLint directive-comments
    'eslint-comments/no-use': [
      'error',
      {
        allow: [
          'eslint-disable',
          'eslint-disable-line',
          'eslint-disable-next-line',
          'eslint-enable',
        ],
      },
    ],
  },
}
