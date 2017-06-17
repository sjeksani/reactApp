const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),

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

            // Loaders for other file types can go here

        ]
    },
    /*plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2,
        }),
    ],*/
    devServer: {
        contentBase: path.resolve(__dirname, './src'), // New
    },
};
