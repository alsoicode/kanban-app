/*eslint-env node*/
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 3000
  },
  entry: './src/Router.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react"
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(css|less)$/,
        loader : 'style!css!less'
      },
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  resolve: {
    root: path.resolve(path.join(__dirname, 'src')),
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.es6']
  }
};
