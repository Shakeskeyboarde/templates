/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.js', '*.cjs'],
      parserOptions: { sourceType: 'script' },
      env: { node: true, es2021: true },
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: { project: './tsconfig.json', tsconfigRootDir: __dirname },
      settings: { react: { version: 'latest' } },
      rules: {
        'no-console': 'off',
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',
        'import/extensions': ['error', 'never', { json: 'always' }],
        'import/exports-last': 'warn',
        'import/order': 'off',
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
      },
      plugins: ['simple-import-sort'],
      extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
      ],
    },
  ],
  ignorePatterns: ['node_modules', 'lib', 'out', 'dist'],
};
