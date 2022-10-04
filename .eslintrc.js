module.exports = {
  extends: ['@alienfast'],
  rules: {
    // this gets really messy in tsx and graphql when types are forced to any e.g. policies
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off'
  },
    parserOptions: {
    project: [
      './tsconfig*.json', // for root project ref and config files etc *outside* of src directories
      './packages/*/tsconfig.json', // all code *in* src directories
    ],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};