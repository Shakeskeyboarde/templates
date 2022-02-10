const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/** @return {import('webpack').Configuration} */
module.exports = (env, argv) => {
  const isBuild = Boolean(env.WEBPACK_BUILD);
  const isProduction = argv.mode === 'production' || (!argv.mode && isBuild);
  const outputRoot = `${__dirname}/dist`;

  return {
    mode: isProduction ? 'production' : 'development',
    target: 'web',
    entry: './src/index.tsx',
    output: {
      path: `${outputRoot}/${isProduction ? 'production' : 'development'}`,
      filename: 'bundle/[name].[chunkhash:8].js',
      assetModuleFilename: 'bundle/[name].[contenthash:8].[ext]',
      publicPath: 'auto',
    },
    stats: { all: false, chunks: true, errors: true, warnings: true },
    performance: { hints: false },
    devtool: env.WEBPACK_SERVE ? 'inline-source-map' : 'source-map',
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.wasm'] },
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/i,
          exclude: [/node_modules[\\/]webpack[\\/]buildin/, /node_modules[\\/]core-js/],
          use: 'babel-loader',
        },
        {
          test: /\.(tsx?|jsx?)$/i,
          exclude: [/node_modules/],
          use: { loader: 'ts-loader', options: { configFile: 'tsconfig.build-webpack.json' } },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(gif|jpe?g|png|apng|svg|webp|bmp|ico|woff2?|otf|ttf)$/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlPlugin({ template: './src/index.html', favicon: './src/favicon.png' }),
      new CopyPlugin({ patterns: [{ context: 'public', from: '**', noErrorOnMissing: true }] }),
      new BundleAnalyzerPlugin({
        analyzerMode: isBuild && isProduction ? 'static' : 'disabled',
        openAnalyzer: false,
        reportFilename: `${outputRoot}/report.html`,
      }),
    ],
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
  };
};
