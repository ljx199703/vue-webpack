const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionWebpackPlugin =  require('compression-webpack-plugin')
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')

const config = {
  mode: 'production',
  entry: {
    vendors: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].[hash:5].js',
    publicPath: '/'
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      filename: 'index.html',
      // chunks: ['runtime', 'app'],
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
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      threshold: 10240,
      test: /\.(js|css)$/,
      minRatio: 0.8,
      deleteOriginalAssets: true
    })
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      // new UglifyJSWebpackPlugin({
      //   exclude: /\.min\.js$/, // 避免二次混淆, 别装B
      //   cache: true,
      //   parallel: true, // 开启cpu多线程压缩
      //   sourceMap: false,
      //   extractComments: true
      // }),
      new OptimizeCssAssetsWebpackPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessorOptions: {
          safe: true,
          autoprefixer: { disable: true }, // 阻止插件移除autoprefixer添加的浏览器前缀
          mergeLonghand: false,
          discardComments: {
            removeAll: true
          }
        },
        canPrint: true
      })
    ]
  }
}

module.exports = merge(config, baseConfig)