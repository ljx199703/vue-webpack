const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
  mode: 'development',
  module: {
    rules: []
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    host: '0.0.0.0',
    port: 8000,
    hot: true,
    proxy: {}
  }
}

module.exports = merge(config, baseConfig)