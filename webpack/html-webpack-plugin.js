'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function () {
    return {
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
        ]
    }
};