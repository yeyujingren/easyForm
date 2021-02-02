const path = require('path');
const WebpackConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');

module.exports = merge(WebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  // watch: true,
  // watchOptions: {
  //   aggregateTimeout: 200,
  //   poll: 1000
  // },

  devServer: {
    port: 9521,
    host: '0.0.0.0',
    publicPath: '/',
    contentBase: path.resolve(__dirname, '../dist/'),
    compress: true,
    historyApiFallback: {
      rewrites: [
        { from: '/', to: `/index.html` },
      ]
    },

    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:9521',
    //     logLevel: 'debug',
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   },
    //   // proxy websocket
    //   '/socket': {
    //     target: 'ws://10.130.170.201:9521',
    //     logLevel: 'debug',
    //     ws: true,
    //     pathRewrite: {
    //       '^/socket': ''
    //     }
    //   }
    // },
    // fix: ngrok tips: Invalid Host header
    disableHostCheck: true
  },
  plugins: [
    // 开启 BundleAnalyzerPlugin
    // new BundleAnalyzerPlugin(),
    
    new ForkTsCheckerWebpackPlugin({
      // 将async设为false，可以阻止Webpack的emit以等待类型检查器/linter，并向Webpack的编译添加错误。
      async: false
    }),
    // 将TypeScript类型检查错误以弹框提示
    // 如果fork-ts-checker-webpack-plugin的async为false时可以不用
    // 否则建议使用，以方便发现错误
    new ForkTsCheckerNotifierWebpackPlugin({
      title: 'TypeScript',
      excludeWarnings: true,
      skipSuccessful: true
    }),
  ]
})
