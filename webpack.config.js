var webpack=require("webpack");
var path = require("path");

module.exports = {
    entry: './app/src/app.js',
    output: {
        path: path.resolve(__dirname, "app/dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    watch:true
};