'use strict';

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function () {
    return {
        plugins: [
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', {discardComments: {removeAll: true}}],
                },
                canPrint: true
            })
        ]
    }
};