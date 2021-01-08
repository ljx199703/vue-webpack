const path = require('path')
const os = require('os')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const config = {
  mode: 'production',
  entry: {
    app: ['babel-polyfill', './src/main.js', './public/index.html'],
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
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                require('imagemin-gifsicle')({
                  interlaced: false
                }),
                require('imagemin-mozjpeg')({
                  progressive: true,
                  arithmetic: false
                }),
                require('imagemin-pngquant')({
                  floyd: 0.5,
                  speed: 2
                }),
                require('imagemin-svgo')({
                  plugins: [
                    { removeTitle: true },
                    { convertPathData: false }
                  ]
                })
              ]
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
                /**
                 * 按需加载polyfill的配置会报错, 淦, 这个tree shaking优化晚点做
                 * 注意: 当'useBuiltIns': 'usage'时, babel-polyfill不需要在entry引入
                 */
                ['@babel/preset-env', {'modules': false, 'useBuiltIns': 'entry', 'corejs': 3}]
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import'
              ],
              cacheDirectory: true
            }
          }
        ]
      },
      {
        exclude: /\.(js|css|json)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'file/',
          name: '[name].[contenthash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true
      }
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: /runtime~.+\.js$/
    }),
    new OptimizeCssAssetsWebpackPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@': './src',
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