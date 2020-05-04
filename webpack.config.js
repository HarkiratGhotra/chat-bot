const webpack = require('webpack');
module.exports = {
    context: __dirname + '/www',
    entry: './js/app.js',
    output: {
        path: __dirname + '/www',
        filename: 'main.js'
    },
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
        ]
    },
    mode: "development",
    devtool: 'true',
        plugins: [
            new webpack.SourceMapDevToolPlugin({
                filename: '[name].js.map',
            })
        ]
};