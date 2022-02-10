/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  compact: false,
  env: {
    test: {
      targets: { node: 'current' },
      presets: [['@babel/preset-env', { modules: 'commonjs' }]],
    },
  },
};
