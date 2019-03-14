'use strict';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = function () {
    return {
        plugins: [
            new MiniCssExtractPlugin({
                filename: "style.css", //"[name].css"
                chunkFilename: '[id].css'
            }),
        ]
    }
};