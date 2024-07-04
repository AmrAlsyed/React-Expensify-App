const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
    return {
        mode: env.production ? 'production' : 'development',
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL)
            }),
            new MiniCssExtractPlugin({
                filename: 'styles.css',
                chunkFilename: '[id].[contenthash].css'
            })
        ],
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    test: /\.s?css$/,
                }
            ]
        },
        devtool: env.production ? 'source-map' : 'inline-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'public')
            },
            historyApiFallback: true,
        }
    }
};
