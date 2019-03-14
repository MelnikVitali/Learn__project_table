'use strict';

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 70
                                },
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                webp: {
                                    quality: 75
                                }
                            }
                        }
                    ]
                },
            ]
        }
    }
};