const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const copy = new CopyWebpackPlugin(
  [
    {
      from: `./src/assets`,
      to: `./assets`,
    },
    {
      from: `./src/**.html`,
      to: `./`,
      flatten: true,
    },
  ],
  {
    ignore: [`.DS_Store`],
  },
);

module.exports = {
  entry: './src/js/index.js',

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: [`.js`, `.css`],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: `babel-loader`,
          },
          {
            loader: `eslint-loader`,
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: `html-loader`,
        options: {
          attrs: [`audio:src`, `img:src`, `video:src`, `source:srcset`], // read src from video, img & audio tag
        },
      },
    ],
  },

  plugins: [copy, new CleanWebpackPlugin(['dist'])],
};
