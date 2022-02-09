/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: { project: './tsconfig.json', tsconfigRootDir: __dirname },
      settings: { react: { version: 'latest' } },
      extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:promise/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'no-console': 'off',
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['*.js', '*.cjs'],
      parserOptions: { sourceType: 'script' },
      env: { node: true, es2020: true },
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    },
  ],
  ignorePatterns: ['node_modules', 'lib', 'out', 'dist'],
};
