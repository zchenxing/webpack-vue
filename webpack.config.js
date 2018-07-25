const path = require('path');
const Webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name]-[hash].js'
    },

    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: true
        }),
        new VueLoaderPlugin(),
        new ExtractTextWebapckPlugin({
            filename: 'css/[name].css'
        }),
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
                test:/\.vue$/,
                loader: 'vue-loader',
            },
        ]
    },
    
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
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