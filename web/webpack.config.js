const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackTemplate = require('html-webpack-template');

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader','css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'cheap-eval-source-map',
  plugins: [new HtmlWebpackPlugin({
    links: [
      'https://fonts.googleapis.com/css?family=Roboto',
    ],
    inject: false,
    template: WebpackTemplate,
    mobile: true,
  })],
  devServer: {
    contentBase: './dist',
  },
};
