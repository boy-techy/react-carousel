const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackManifest = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const publicPath = process.env.NODE_ENV === 'production' ? '/dist' : '/';


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
                    MiniCssExtractPlugin.loader,
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
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        port: '3000',
        contentBase: [path.resolve(__dirname, 'dist')], //static files path
        historyApiFallback: true,
        watchContentBase: true,
        compress: true,
        publicPath: publicPath, // To serve bundles from
        injectClient: true, // for HMR injection
        injectHot: true, // for HMR injection
    },
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: publicPath,
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};
