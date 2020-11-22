const path = require('path');
//const json5 = require('json5');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },

      // {
      //   test: /\.json5$/i,
      //   type: 'json',
      //   parser: {
      //     parse: json5.parse,
      //   },
      // },
    ]
  }
};