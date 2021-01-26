const path = require('path');
const WebpackConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
    new BundleAnalyzerPlugin()
  ]
})
