const path = require('path');
const webpack = require('webpack');

const debug = process.env.NODE_ENV !== 'production';
const dir = dest => path.resolve(__dirname, dest);

const plugins = [];

if (!debug) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true, sourcemap: false, comments: false,
    })
  );
}

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-cheap-source-map' : null,
  entry: './client/js/app.js',
  output: {
    path: './priv/static/js',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          "presets": [
            ["env", {
              "targets": {
                "chrome": 54,
                "opera": 42,
                "firefox": 51
              }
            }]
          ]
        },
      }
    ],
  },
  plugins,
};
