const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/** @return {import('webpack').Configuration} */
module.exports = (environment, argv) => {
  const isBuild = Boolean(environment.WEBPACK_BUILD);
  const isProduction = argv.mode === 'production' || (!argv.mode && isBuild);
  const outputRoot = `${__dirname}/dist`;

  return {
    devServer: {
      allowedHosts: 'all',
      client: { overlay: { errors: true, warnings: false } },
      compress: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: false,
      port: 8080,
      static: 'public',
    },
    devtool: environment.WEBPACK_SERVE ? 'inline-source-map' : 'source-map',
    entry: './src/index.tsx',
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          exclude: [/node_modules[\\/]webpack[\\/]buildin/, /node_modules[\\/]core-js/],
          // Make a best attempt to downlevel and polyfill absolutely ANY
          // script (including node_modules) to something that can be run in
          // the browser.
          test: /\.(tsx?|jsx?)$/i,
          use: 'babel-loader',
        },
        {
          exclude: [/node_modules/],
          // TypeScript > JavaScript
          test: /\.tsx?$/i,
          use: { loader: 'ts-loader', options: { configFile: 'tsconfig.build-webpack.json' } },
        },
        {
          // Allow CSS for backwards compatibility, but prefer CSS-in-JS for
          // anything complex.
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          // Prefer separate resource files to take advantage of lazy loading,
          // parallelism, caching, and to optimize transfer size.
          test: /\.(gif|jpe?g|png|apng|svg|webp|bmp|ico|woff2?|otf|ttf)$/,
          type: 'asset/resource',
        },
      ],
    },
    output: {
      assetModuleFilename: 'bundle/[name].[contenthash:8].[ext]',
      filename: 'bundle/[name].[chunkhash:8].js',
      path: `${outputRoot}/${isProduction ? 'production' : 'development'}`,
      publicPath: 'auto',
    },
    performance: { hints: false },
    plugins: [
      new HtmlPlugin({ favicon: './src/favicon.png', template: './src/index.html' }),
      new CopyPlugin({ patterns: [{ context: 'public', from: '**', noErrorOnMissing: true }] }),
      new BundleAnalyzerPlugin({
        analyzerMode: isBuild && isProduction ? 'static' : 'disabled',
        openAnalyzer: false,
        reportFilename: `${outputRoot}/report.html`,
      }),
    ],
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.wasm'] },
    stats: { all: false, chunks: true, errors: true, warnings: true },
    target: 'web',
  };
};
