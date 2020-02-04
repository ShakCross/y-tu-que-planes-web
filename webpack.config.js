const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
    entry: 'src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'script.js'
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
                            sourceMap: isDevelopment
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
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
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
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                      },
                    }
                  ]
            },
        ]
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
            ".otf"]
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