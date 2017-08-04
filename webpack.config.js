const { resolve } = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const SERVER_PORT = process.env.SERVER_PORT || '3000';
const SERVER_HOST = process.env.SERVER_HOST || 'http://localhost';

const ENTRY = (NODE_ENV === 'development')
  ? [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './frontend/index.js',
  ]
  : [
    'babel-polyfill',
    './frontend/index.js',
  ];

const DEVTOOL = (NODE_ENV === 'development')
  ? 'inline-source-map'
  : 'nosources-source-map';

const PLUGINS = (NODE_ENV === 'development')
  ? [
    new webpack.DefinePlugin({
      'NODE_ENV' : JSON.stringify(NODE_ENV),
      'SERVER_PORT' : JSON.stringify(SERVER_PORT),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({options: {postcss: [autoprefixer()]}}),
    new webpack.HotModuleReplacementPlugin(),
  ]
  : [
    new webpack.DefinePlugin({
      'NODE_ENV' : JSON.stringify(NODE_ENV),
      'SERVER_PORT' : JSON.stringify(SERVER_PORT),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({options: {postcss: [autoprefixer()]}}),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin(),
  ] 

module.exports = {
  context: resolve(__dirname, 'src'),

  resolve: {
    modules: [
      resolve(__dirname, 'src/shared'),
      resolve(__dirname, 'src/frontend'),
      'node_modules',
    ],
  },

  entry: ENTRY,
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  devtool: DEVTOOL,

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    proxy: [
      {
        context: ['/events'],
        target: `${SERVER_HOST}:${SERVER_PORT}`,
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
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: { ident: 'postcss', plugins: () => [ require('plugin') ] },
          },

        ],
      },
    ],
  },

  plugins: PLUGINS,
};
