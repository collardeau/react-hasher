var webpack = require('webpack');

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/Router.js'
  ],

  output: {
    path: './public',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/}
    ]
  }

};

