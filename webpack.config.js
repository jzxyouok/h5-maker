/**
 * Created by Soup Tang on 2015/8/26.
 */
var webpack = require("webpack");
var path = require('path');
//var env = 'server';
var env = 'client';

module.exports = {
    entry: {app: './src/components/App.js'},
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    devtool: 'eval',
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /.(png|jpg)$/, loader: "url-loader?limit=100000"},
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",query: {presets:['react','es2015']}},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            //"process.env.NODE_ENV": JSON.stringify("dev")
            //"process.env.NODE_ENV": JSON.stringify("production")
        })
        //new webpack.optimize.UglifyJsPlugin({
        //    sourceMap: false,
        //    mangle: false
        //})
    ]
};