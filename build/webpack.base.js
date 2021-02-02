const path = require("path");
const os = require("os");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                strictMath: true,
                javascriptEnabled: true
              }
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

  optimization: {
    splitChunks: {
      chunks: 'async',  // 定义要分割的代码为同步还是异步
      minSize: 30000,  // 代码分割的文件大小最低要求，大于（字节）这个值才会单独拿出来打包
      maxSize: 50000,   // 对分割的代码进行再次分割，此处将会按50kb对已经分割的文件再做分割（如果可以分割的话）
      minChunks: 1, // 当一个模块陪引用多少次之后才会分割
      maxAsyncRequests: 5,  // 同时加载的模块数最多为5
      maxInitialRequests: 3,  // 入口文件最多只引入3各模块，多的话就合并
      automaticNameDelimiter: '~',  // 连接符
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,  // 优先级，越大越高
          filename: 'vendors.js' //  定义打包文件的文件名
        },
        default: {  // 如果引入文件不是来自于node_modules，则执行default配置
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true, // 模块复用
          filename: 'common.js' //  定义打包文件的文件名
        }
      }
    }
  },

  plugins: [
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
