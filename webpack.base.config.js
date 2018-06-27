const path = require("path");
const webpack = require('webpack');

module.exports = {
    mode: 'none',
    entry: {
        App: './reactjs/App',
        vendors: ['react'],
    },

    output: {
        path: path.resolve('./restinerest/static/bundles/local/'),
        filename: "[name].js"
    },

    externals: [],

    plugins: [
        new webpack.optimize.SplitChunksPlugin('vendors', 'vendors.js'),
    ],

    module: {
        rules: []
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
};

