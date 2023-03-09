const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './assets/jsx/index.jsx',
    courses: './assets/jsx/courses.jsx',
    style: './assets/jsx/style.jsx',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader:  "babel-loader",
        },
      },
      /*{
        mimetype: 'image/svg+xml',
        scheme: 'data',
        type: 'asset/resource',
        generator: {
          filename: 'icons/[hash].svg'
        }
      },*/
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png$/,
        type: 'asset/resource',
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            /*options: {
              importLoaders: 2,
              sourceMap: true
            }*/
          },
          { loader: 'resolve-url-loader' },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: [
                  path.resolve("./assets/css/"),
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new AssetsPlugin({
      filename: 'bundles.json',
      path: path.resolve('./_data'),
    }),
  ],
  /*resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },*/
  optimization: {
    usedExports: true,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets/dist'),
    publicPath: '/assets/dist/',
    assetModuleFilename: '[name]-[hash][ext][query]',
  },
};
