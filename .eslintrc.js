module.exports = {
  extends: ['@alienfast'],
  parserOptions: {
    project: './tsconfig.lint.json'
  },
  rules: {
    // this gets really messy in tsx and graphql when types are forced to any e.g. policies
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off'
  }
};