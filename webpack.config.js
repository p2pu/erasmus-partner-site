const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './assets/jsx/index.jsx',
    courses: './assets/jsx/courses.jsx',
    style: './assets/css/base.scss',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader:  "babel-loader",
          options: {
            plugins: [
              [
                'ttag', {
                  extract: { output: 'i18n/poly.pot' },
                  resolve: { translations: `i18n/de.po` },
                  numberedExpressions: false,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
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
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              extract: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /de/),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new AssetsPlugin({
      filename: 'bundles.json',
      path: path.resolve('./_data'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: '[name].js',
    publicPath: '/assets/dist/',
  },
};
