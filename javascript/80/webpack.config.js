const path = require('path');
//const json5 = require('json5');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {

    contentBase: './dist',

  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

      // {
      //   test: /\.json5$/i,
      //   type: 'json',
      //   parser: {
      //     parse: json5.parse,
      //   },
      // },
    ]
  },
  plugins:[
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

    new HtmlWebpackPlugin({

      title: 'Development',
      template: './src/hw.html'

    }),

  ],

};