const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const paths = {
  src: path.resolve(__dirname, '_site', 'assets', 'index.js'),
  build: path.resolve(__dirname, '_site', 'assets'),
}

module.exports = {
  entry: paths.src,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: paths.build,
    filename: 'bundle.js'
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'underscore-template-loader',
          },
        ],
      },
    ]
  },
  plugins: []
};