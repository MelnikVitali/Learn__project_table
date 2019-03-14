'use strict';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },
            ]
        }
    }
};