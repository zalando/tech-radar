const
    fs = require('fs-extra'),
    ConfigClass = require('./config.js');

module.exports = class extends ConfigClass {
    constructor() {
        super();

        this.config = {
            mode: 'production',
            target: 'web',
            entry: [
                './src/app.js',
                './src/scss/index.scss'
            ],

            output: {
                filename: 'js/bundle.js',
                path: `${this.appPath}/dist/prod/`,
            },

            module: {
                rules: [
                    {
                        test: /\.html?$/,
                        loader: "template-literals-loader"
                    },
                    {
                        test: /.scss$/,
                        use: [
                            'style-loader',
                            {
                                loader: 'file-loader',
                                options: {
                                    name: 'bundle.css',
                                    outputPath: '../../dist/prod/css/'
                                }
                            },
                            'extract-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                },
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: false,
                                },
                            },
                        ],
                    },
                ],
            },

            plugins: [
                {
                    apply: (compiler) => {
                        compiler.hooks.afterEmit.tap('Complete', (compilation) => {
                            console.log('>>> HOOKED');
                            fs.copySync(`${this.appPath}/public/`, `${this.appPath}/dist/prod`);
                            fs.copySync(`${this.appPath}/dist/prod`, `${this.appPath}/docs`);
                        });
                    }
                }
            ]
        };
        return this.mergeConfig();
    };
};