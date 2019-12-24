const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackManifest = require('webpack-manifest-plugin');


module.exports = {
    mode: 'development',
    entry: ['react-hot-loader/patch', './index.js'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackManifest({
            fileName: 'manifest.json',
            writeToFileEmit: true
        }),
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        port: '3000',
        contentBase: [path.resolve(__dirname, 'dist'),path.resolve(__dirname, 'assets')], //static files path
        historyApiFallback: true,
        watchContentBase: true,
        compress: true,
        publicPath: '/', // To serve bundles from
        injectClient: true, // for HMR injection
        injectHot: true, // for HMR injection
    },
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};
