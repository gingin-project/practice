const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  mode: 'development',
  entry: {
    style: path.resolve(__dirname + '/src/scss/style.scss'),
    script: path.resolve(__dirname + '/src/js/script.js')
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|gif|jpg|svg|)$/i,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ],
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false
    }),
  ]
}
