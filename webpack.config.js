var path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        library: 'panelWidgets',
        libraryExport: "default",
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, // which file needs to be read
                exclude: /node_modules/, // which folder needs not to be read
                loader: ['babel-loader'] // which transplier/compiler/plugin to compile files
            }, {
                test: /\.html$/,
                loader: "angular-templatecache-loader?module=panel-widgets&prefix=panel-widgets"
            }
        ]
    },
    devServer: {
        port: 3000, // configuring port for localserver
        contentBase: './src' // configuring from where content needs to be served
    }
};
