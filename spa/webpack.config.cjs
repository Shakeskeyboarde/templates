const Package = require('./package.json');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/** @return {import('webpack').Configuration} */
module.exports = (environment, argv) => {
  const isBuild = Boolean(environment.WEBPACK_BUILD);
  const modeConfig = argv.mode || process.env.NODE_ENV;
  const mode = modeConfig || (isBuild ? 'production' : 'development');
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
    devtool: mode === 'production' ? 'source-map' : 'inline-source-map',
    entry: ['./src/index.tsx'],
    mode,
    module: {
      rules: [
        // Make a best attempt to downlevel and polyfill absolutely ANY
        // script (including node_modules) to something that can be run in
        // the browser.
        {
          exclude: [/node_modules[\\/]webpack[\\/]buildin/, /node_modules[\\/]core-js/],
          test: /\.(tsx?|jsx?)$/i,
          use: 'babel-loader',
        },
        // TypeScript > JavaScript
        {
          exclude: [/node_modules/],
          test: /\.tsx?$/i,
          use: { loader: 'ts-loader', options: { compilerOptions: { noEmit: false }, configFile: 'tsconfig.json' } },
        },
        // Allow CSS for backwards compatibility, but prefer CSS-in-JS for
        // anything complex.
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        // Prefer separate resource files to take advantage of lazy loading,
        // parallelism, caching, and to optimize transfer size.
        {
          test: /\.(gif|jpe?g|png|apng|svg|webp|bmp|ico|woff2?|otf|ttf)$/,
          type: 'asset/resource',
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: (module_) =>
              'vendor.' + module_.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1].replace('@', ''),
            test: /[\\/]node_modules[\\/]/,
          },
        },
        chunks: 'all',
        maxInitialRequests: Number.POSITIVE_INFINITY,
        minSize: 0,
      },
    },
    output: {
      assetModuleFilename: 'bundle/[name].[contenthash:8].[ext]',
      filename: 'bundle/[name].[chunkhash:8].js',
      path: `${outputRoot}/${mode}`,
      publicPath: 'auto',
    },
    performance: { hints: false },
    plugins: [
      new HtmlPlugin({
        favicon: './src/favicon.png',
        template: './src/index.ejs',
        title: Package.title || Package.name || 'Webpack App',
      }),
      new CopyPlugin({ patterns: [{ context: 'public', from: '**', noErrorOnMissing: true }] }),
      new BundleAnalyzerPlugin({
        analyzerMode: isBuild && mode === 'production' ? 'static' : 'disabled',
        defaultSizes: 'parsed',
        openAnalyzer: false,
        reportFilename: `${outputRoot}/report.html`,
      }),
    ],
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.wasm'] },
    stats: { all: false, errors: true, warnings: true },
    target: 'web',
  };
};
