const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: process.cwd(),

    entry: {
        app: './main.js',
        //vendor: ['react', 'react-dom'],
    },

    output: {
        path: __dirname,
        filename: '[name].bundle.js',
        publicPath: '/assets',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'] },
                }],
            }, {
                test: /\.jsx$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'] },
                }],
            },

        ]
    },

    devServer: {
        contentBase: process.cwd(), // New
    },
};
