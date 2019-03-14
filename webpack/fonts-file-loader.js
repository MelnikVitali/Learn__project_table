'use strict';

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name][hash].[ext]'
                        }
                    }
                },
            ]
        }
    }
};