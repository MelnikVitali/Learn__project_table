const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const babelLoader = require('./webpack/babel-loader');
const loadersCssPostcssSass = require('./webpack/loaders-css-postcss-sass');
const fontsFileLoader = require('./webpack/fonts-file-loader');
const imageWebpackLoader = require('./webpack/image-webpack-loader');
const htmlWebpackPlugin = require('./webpack/html-webpack-plugin');
const miniCssExtractPlugin = require('./webpack/mini-css-extract-plugin');
const cleanWebpackPlugin = require('./webpack/clean-webpack-plugin');
const webpackProvidePluginJquery = require('./webpack/webpack-provide-plugin-jquery');
const optimizeCssAssetsPlugin = require('./webpack/optimize-css-assets-webpack-plugin');

let config = merge([
    {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',//'[name].js' 
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    devServer: {
        port: 9000,
        compress: true,
        stats: 'errors-only',
        overlay: true,
    },
},
    babelLoader(),
    loadersCssPostcssSass(),
    fontsFileLoader(),
    imageWebpackLoader(),
    htmlWebpackPlugin(),
    miniCssExtractPlugin(),
    cleanWebpackPlugin(),
    webpackProvidePluginJquery(),
    optimizeCssAssetsPlugin()
]);

module.exports = (env, options) => {
    let production = options.mode === 'production';

    config.devtool = production
        ? false//'source-map'
        : 'eval-sourcemap';
    return config;
};