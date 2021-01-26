const { resolve } = require('path')
const os = require('os')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const config = {
  entry: {
    app: ['./src/main.js'],
  },
  output: {
    path: resolve(__dirname, '../build'),
    filename: '[name].[hash:5].js',
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
              outputPath: '/image',
              name: '[name].[hash:5].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/font',
              name: '[name].[contenthash:5].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/media',
              name: '[name].[contenthash:5].[ext]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 2
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
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
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      filename: 'index.html',
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: /runtime~.+\.js$/
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    }
  }
}

module.exports = config