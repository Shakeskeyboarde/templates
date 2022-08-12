/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  compact: false,
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: { proposals: true, version: require('core-js/package.json').version },
        modules: false,
        useBuiltIns: 'entry',
      },
    ],
  ],
};
