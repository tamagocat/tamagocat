const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const path = require('path')
const outputPath = path.resolve('dist')

module.exports = merge(commonConfig, {
  mode: 'development',
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: outputPath,
    openPage: 'yda/',
    open: true,
    host: '0.0.0.0',
    port: 8000,
    disableHostCheck: true,
    useLocalIp: true
  }
})
