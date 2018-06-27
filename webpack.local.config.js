const path = require("path");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const config = require('./webpack.base.config.js');

config.devtool = "#eval-source-map";

config.module.rules.push(
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
            // { fuck
            //     loader: 'react-hot-loader/webpack'
            // },
            {
                loader: 'babel-loader'
            }
        ]
    }
);

const ip = 'localhost';
config.entry = {
    App: [
        'webpack-dev-server/client?http://' + ip + ':3000',
        'webpack/hot/only-dev-server',
        './reactjs/App',
    ],
};

config.output.publicPath = 'http://' + ip + ':3000' + '/assets/bundles/';

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleTracker({filename: './webpack-stats-local.json'}),
]);
module.exports = config;