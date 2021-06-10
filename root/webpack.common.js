const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const sourcePath = path.resolve('src')
const outputPath = path.resolve('dist')

module.exports = {
  entry: {
    yda: path.resolve(sourcePath, 'yda/js/index')
  },
  output: {
    path: outputPath,
    filename: '[name]/js/index.js',
    // chunkFilename: 'js/[name].[contenthash].js',
    publicPath: '/'
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'initial',
  //     cacheGroups: {
  //       vendor: {
  //         test: /node_modules/,
  //         name: 'vendor'
  //       },
  //       vendorsModules: {
  //         test: /src[\\/]js[\\/]modules/,
  //         name: 'vendor-modules',
  //         minSize: 0,
  //         minChunks: 1
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'yda/images',
              publicPath: '/yda/images'
            }
          }
          // 'image-webpack-loader'
        ]
      },

      {
        test: /\.(jpe?g|gif|png)$/,
        use: ['image-webpack-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: false
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'yda/index.html',
      template: path.resolve(sourcePath, 'yda/html/index.html'),
      chunks: ['index'],
      minify: false,
      inject: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/css/index.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new StylelintPlugin({
      files: './src/**/scss/**/*.scss',
      fix: true
    })
  ]
}
