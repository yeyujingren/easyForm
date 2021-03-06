const path = require("path");
const os = require("os");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/index.tsx'),
  },

  // 打包文件路径
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: "[name]/[chunkhash:8].js",
    // This option determines the name of non-entry chunk files.
    chunkFilename: "[name]/[chunkhash:8].chunk.js"
  },
  
  module: {
    rules: [
      // js || jsx || tsx
      {
        test: /\.(j|t)sx?$/,
        loader: "eslint-loader",
        enforce: "pre",
        exclude: /node_modules/
      },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {loader: "babel-loader"}
        ]
      },
      // Less || css
      {
        test: /\.css|\.less$/,
        use: [
          'thread-loader',
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                  plugins: []
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              strictMath: true,
              noIeCompat: true
            }
          }
        ]
      },

      // 图片文件
      {
        test: /\.(jpe?g|png|gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'image/[name].[contenthash:8].[ext]'
                }
              }
            }
          }
        ]
      },

      // 媒体文件
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|acc)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[contenthash:8].[ext]'
                }
              }
            }
          }
        ]
      },

      // 字体文件
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[contenthash:8].[ext]'
                }
              }
            }
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: [".tsx", ".ts", ".jsx", ".js", ".less", ".json"]
  },

  plugins: [
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    // 拆分css
    new MiniCssExtractPlugin({
      filename: "[name]/[contenthash:8].bundle.css",
      chunkFilename: "[name]/[contenthash:8].chunk.css"
    })
  ]
}
