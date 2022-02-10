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
        'no-console': 'warn',
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',
        'import/extensions': ['off', 'ignorePackages'],
      },
      extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:promise/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jest/recommended',
        'plugin:testing-library/react',
        'plugin:prettier/recommended',
      ],
    },
  ],
  ignorePatterns: ['node_modules', 'lib', 'out', 'dist'],
};
