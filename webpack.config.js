var webpack = require('webpack');
var bourbon = require('node-bourbon').includePaths;

module.exports = {
  devtool: "eval",
  entry: {
    app: [
      "webpack-dev-server/client?http://0.0.0.0:8080",
      "webpack/hot/only-dev-server",
      "./src/scripts/main.js"
    ]
  },
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "react-hot!6to5",
        exclude: /node_modules/
      },

      {
        test: /\.scss$/,
        loader: "style!css!sass?outputStyle=expanded&includePaths[]=" + bourbon
      },

      {
        test: /\.(html|png)$/,
        loader: "file?name=[path][name].[ext]&context=./src"
      }
    ]
  }
};
