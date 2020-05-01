module.exports = {
    context: __dirname + '/www',
    entry: './js/app.js',
    output: {
        path: __dirname + '/www',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
        ]
    }
};