var config = require('./webpack.config.js');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  })
);

config.plugins.push(
  // This plugin looks for similar chunks and files
  // and merges them for better caching by the user
  new webpack.optimize.DedupePlugin()
);

config.plugins.push(
  // This plugins optimizes chunks and modules by
  // how much they are used in your app
  new webpack.optimize.OccurenceOrderPlugin()
);

config.plugins.push(
  // This plugin prevents Webpack from creating chunks
  // that would be too small to be worth loading separately
  new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 51200, // ~50kb
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  })
);

config.plugins.push(
  new CopyWebpackPlugin([
    {
      from: 'src/images',
      to: 'images'
    },
    {
      from: 'src/styles',
      to: 'styles'
    },
    {
      from: 'src/mockdata',
      to: 'mockdata'
    },
    {
      from: 'src/index.html'
    },
    {
      from: 'src/_redirects'
    }
  ])
);

module.exports = config;
