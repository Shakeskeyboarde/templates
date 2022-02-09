/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  compact: false,
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
