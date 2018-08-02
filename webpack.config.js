const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV === 'development'

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },
    devtool: process.env.NODE_ENV === 'development' ? 'eval': 'cheap-module-source-map' , 
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            vendor: './vendor.dll.js', //与dll配置文件中output.fileName对齐
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new VueLoaderPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/vendor-manifest.json')
        })
    ],

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(c|le)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'px2rem-loader', 
                    'less-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    query: {
                        name: 'assets/[hash].[ext]'
                    }
                }
            }
        ]
    },

    resolve: {
        alias: {
            'assets': path.resolve(__dirname, './src/assets'),
            'components': path.resolve(__dirname, './src/components')
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        host: 'localhost',
        port: 3005,   
        open: true,
        historyApiFallback: true
    }
}