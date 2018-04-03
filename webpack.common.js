const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',

  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },

  plugins: [new CleanWebpackPlugin(['dist']), new HtmlWebpackPlugin()],

  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
