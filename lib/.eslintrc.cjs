/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.js', '*.cjs'],
      parserOptions: { sourceType: 'script' },
      env: { node: true, es2021: true },
      settings: { react: { version: 'latest' } },
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': ['error', {}],
      },
      extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: { project: './tsconfig.json', tsconfigRootDir: __dirname },
      settings: { react: { version: 'latest' } },
      rules: {
        // Console logging is useful sometimes, but shouldn't be forgotten.
        'no-console': 'warn',

        // Rationalize import/export to improve diffs, among other things.
        'import/no-default-export': 'warn',
        'import/prefer-default-export': 'off',
        'import/extensions': ['warn', 'never', { json: 'always' }],
        'import/exports-last': 'warn',
        'import/order': 'off',
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',

        // Pick the "better" way where TS is flexible.
        '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
        '@typescript-eslint/method-signature-style': 'warn',

        // Smell that code (or better yet, don't).
        '@typescript-eslint/no-floating-promises': 'warn',
      },
      plugins: ['simple-import-sort', 'only-warn'],
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
