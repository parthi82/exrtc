const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

const plugins = [];

if (!debug) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({ title: 'Tree-shaking' }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true, sourcemap: false, comments: false,
    }),
    new CompressionPlugin()
  );
}

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-cheap-source-map' : false,
  entry: './client/js/app.jsx',
  output: {
    path: './priv/static/js',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'react'],
        },
      },
    ],
  },
  plugins,
};
