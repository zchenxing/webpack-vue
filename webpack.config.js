const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name]-[hash].js',
    },

    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            vendor: './vendor.dll.js', //与dll配置文件中output.fileName对齐
            inject: true
        }),
        new ExtractTextWebapckPlugin({
            filename: 'css/[name].css'
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
                test: /\.css$/,
                // loader:['style-loader','css-loader']
                // 不再需要style-loader
                use: ExtractTextWebapckPlugin.extract({
                    use: ['css-loader','postcss-loader']
                }),
            },
            {
                test: /\.less$/,
                use:ExtractTextWebapckPlugin.extract({ //分离less编译后的css文件
                    use:['css-loader','less-loader', 'postcss-loader']
                })
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
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpeg|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    query: {
                        name: 'assets/[hash].[ext]'
                    }
                }
            }
        ]
    },
    

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        host: 'localhost',
        port: 3011,   
        open: true,
        historyApiFallback: true
    }
}