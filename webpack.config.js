var webpack = require('webpack');

module.exports = {
  entry: [
    './app/Router.js'
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
 module: {
     loaders: [
       { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/}
     ]
   }
};

