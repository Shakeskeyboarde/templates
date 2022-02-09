const coreJsVersion = require('core-js/package.json').version;

/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  compact: false,
  presets: [['@babel/preset-env', { useBuiltIns: 'entry', corejs: { version: coreJsVersion, proposals: true } }]],
};
