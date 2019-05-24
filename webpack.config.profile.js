const config = require('./webpack.config');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

config.plugins = config.plugins.concat([new BundleAnalyzerPlugin()]);

module.exports = config;
