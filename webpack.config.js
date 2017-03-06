var webpack=require("webpack");
var path = require("path");
var $ = require("jquery");
 
module.exports = {
    entry: './app/src/app.js',
    output: {
        path: path.resolve(__dirname, "app/dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/,loader: "babel-loader",exclude: /node_modules/ },
            {test: /\.html$/,loader: "raw" },
            {test: /\.css$/,loader: "style-loader!css-loader"},
            {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,loader: 'file-loader'},
            { test: /\.scss/, exclude: /node_modules/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'},
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    watch:true
};