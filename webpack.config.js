var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './app/Router.js'
  ],
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  module: {
     loaders: [
       { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/}
     ]
   }
};

