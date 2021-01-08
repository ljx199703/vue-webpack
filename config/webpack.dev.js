const path = require('path')
const os = require('os')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const config = {
  mode: 'development',
  entry: {
    app: ['./src/main.js', './public/index.html'],
    vendor: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash:5].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: 'img/[name]-[hash:5].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          name: 'fonts/[name]-[hash:5].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40 * 1024,
              name: 'media/[name]-[hash:5].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              localIndentName: '[name]--[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: os.cpus().length
            }
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {"modules": false, "useBuiltIns": "entry", "corejs": 3}]
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import'
              ],
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: /runtime~.+\.js$/
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port: 8000,
    hot: true
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    }
  }
}

module.exports = config