const
    ConfigClass = require('./config.js'),
    StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = class extends ConfigClass {
    constructor() {
        super();

        this.config = {
            mode: 'development',
            target: 'web',
            entry: {
                radar: './src/app.js',
                default: './src/scss/radar.scss',
                print: './src/scss/print.scss',
                dark: './src/scss/dark.scss',
                forest: './src/scss/forest.scss'
            },

            output: {
                filename: './js/[name].js',
                path: `${this.appPath}/dist/dev`,
                hotUpdateChunkFilename: `../../.hot/hot-update.js`,
                hotUpdateMainFilename: `../../.hot/hot-update.json`
            },

            module: {
                rules: [
                    {
                        enforce: 'pre',
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'eslint-loader',
                    },
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env"]
                            }
                        }
                    },
                    {
                        test: /\.html?$/,
                        loader: "template-literals-loader"
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            'style-loader',
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[name].css',
                                    outputPath: '../../dist/dev/css/'
                                }
                            },
                            'extract-loader',
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
                        ],
                    },
                ],
            },

            plugins : [
                new StyleLintPlugin()
            ],

            devServer: {
                contentBase: ['public', 'dist/dev'],
                publicPath: '/',
                compress: true,
                host: '0.0.0.0',
                port: 8080,
                headers: {
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
                    "Access-Control-Allow-Origin": "*"
                },
                hot: true,
                index: 'public/index.html',
                writeToDisk: true,
                watchOptions: {
                    poll: true
                },
                watchContentBase: true
            }
        };
        return this.mergeConfig();
    };
};
