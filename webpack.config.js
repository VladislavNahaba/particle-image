const path  = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const copyWebpackPlugin = require('copy-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimize =  true;
        config.minimizer = [
            new CSSMinimizerWebpackPlugin(),
            new TerserPlugin()
        ];
    }
    return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const cssLoader = extra => {
    const loaders = [
        {
            loader: miniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            }
        },
        'css-loader'
    ];
    if (extra) {
        loaders.push(extra);
    }
    return loaders;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './js']
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist') 
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(),
    devServer: {
        port: 9000,
        https: !isDev,
        hot: isDev,
        onListening: server => {
            const port = server.listeningApp.address().port;
            console.log('Listening on port:', port);
        },
        open: true
    },
    devtool: isDev ? 'source-map': 'eval',
    plugins: [
        new htmlWebpackPlugin({
            template: '../index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        // new copyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, 'src', 'assets', 'images'),
        //             to: path.resolve(__dirname, 'dist', 'assets', 'images')
        //         },
        //         {
        //             from: path.resolve(__dirname, 'src', 'assets', 'music'),
        //             to: path.resolve(__dirname, 'dist', 'assets', 'music')
        //         }
        //     ],
        // }),
        new miniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoader()
            },
            // {
            //     test: /\.less$/,
            //     use: cssLoader('less-loader')
            // },
            // {
            //     test: /\.s[ac]ss$/,
            //     use: cssLoader('sass-loader')
            // },
            {
                test: /\.(png|jpg|svg|gif|ttf|woff(2)?|eot|mp3)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-private-methods"
                        ]
                    }
                },
            }
        ]
    }
}