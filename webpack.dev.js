const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: './src/js/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/',
  },
});
