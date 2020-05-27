const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
    entry: 'src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'script.js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]"
                            },
                            sourceMap: isDevelopment,
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDevelopment,
                            prependData: '@import "src/styles/variables.scss", "src/styles/mixins.scss";',
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, 'src/styles')]
                            }
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')(),
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                    isDevelopment ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')(),
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },

            },
            {
                test: /\.(png|jpe?g|gif|webp|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'src/assets/img',
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'src/assets/fonts'
                }
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        publicPath: '/'
    },
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        extensions: [
            ".js",
            ".jsx",
            ".scss",
            ".gif",
            ".png",
            ".jpg",
            ".jpeg",
            ".svg",
            ".ttf",
            ".otf",
            ".json",
            ".webp"
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css"
        })
    ],
}