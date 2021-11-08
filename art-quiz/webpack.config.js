const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },

  devServer: {
    port: 4200
  },

  devtool: 'eval',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'ArtQuiz',
      template: './index.html',
    })
  ]
};