/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  compact: false,
  env: {
    test: {
      targets: { node: 'current' },
      presets: [['@babel/preset-env', { modules: 'commonjs' }]],
    },
  },
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: { version: require('core-js/package.json').version, proposals: true },
        modules: false,
      },
    ],
  ],
};
