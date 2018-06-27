const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.local.config');

const ip = 'localhost';

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
}).listen(3000, ip, function (err, result) {
    if (err) {
        console.log(err)
    }
    console.log('Listening at ' +ip + ':3000')
});