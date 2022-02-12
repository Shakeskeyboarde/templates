/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.js', '*.cjs'],
      parserOptions: { sourceType: 'script' },
      env: { node: true, es2021: true },
      settings: { react: { version: 'latest' } },
      rules: { 'no-console': 'off' },
      extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: { project: './tsconfig.json', tsconfigRootDir: __dirname },
      settings: { react: { version: 'latest' } },
      rules: {
        'no-console': 'warn',
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',
        'import/extensions': ['warn', 'never', { json: 'always' }],
        'import/exports-last': 'warn',
        'import/order': 'off',
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
        '@typescript-eslint/method-signature-style': 'warn',
        '@typescript-eslint/no-floating-promises': 'error',
      },
      plugins: ['simple-import-sort'],
      extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:react/jsx-runtime',
        'plugin:jest/recommended',
        'plugin:testing-library/react',
        'plugin:prettier/recommended',
      ],
    },
  ],
  ignorePatterns: ['node_modules', 'lib', 'out', 'dist'],
};
