module.exports = {
  extends: './node_modules/kcd-scripts/eslint.js',
  rules: {
    'babel/camelcase': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    'require-await': 'off',
    'max-statements': ['error', 150],
    complexity: ['error', 20],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
  },
}