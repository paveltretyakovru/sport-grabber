const { resolve } = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: resolve(__dirname, 'src'),

  resolve: {
    modules: [
      resolve(__dirname, 'src/shared'),
      resolve(__dirname, 'src/frontend'),
      'node_modules',
    ],
  },

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './frontend/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    proxy: [
      {
        context: ['/events'],
        target: 'http://localhost:3000',
        secure: false,
      },
    ],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: { ident: 'postcss', plugins: () => [ require('plugin') ] },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({ 'NODE_ENV' : JSON.stringify(NODE_ENV) }),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({options: {postcss: [autoprefixer()]}}),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
