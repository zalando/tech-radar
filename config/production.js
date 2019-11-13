const
    fs = require('fs-extra'),
    ConfigClass = require('./config.js'),
    spawn = require('child_process').spawn;

module.exports = class extends ConfigClass {
    constructor() {
        super();

        this.config = {
            mode: 'production',
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
                path: `${this.appPath}/dist/prod/`,
            },

            module: {
                rules: [
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
                            fs.copySync(`${this.appPath}/public/`, `${this.appPath}/dist/prod`);
                            fs.copySync(`${this.appPath}/dist/prod`, `${this.appPath}/docs`);

                            pathReplace('/css', '/tech-radar/css', `${this.appPath}/docs/css/radar.css`);
                            pathReplace('/images', '/tech-radar/images', `${this.appPath}/docs/css/radar.css`);
                            pathReplace('/css', '/tech-radar/css', `${this.appPath}/docs/css/dark.css`);
                            pathReplace('/images', '/tech-radar/images', `${this.appPath}/docs/css/dark.css`);
                            pathReplace('/css', '/tech-radar/css', `${this.appPath}/docs/css/forest.css`);
                            pathReplace('/images', '/tech-radar/images', `${this.appPath}/docs/css/forest.css`);
                            pathReplace('/css', '/tech-radar/css', `${this.appPath}/docs/css/print.css`);
                            pathReplace('/images', '/tech-radar/images', `${this.appPath}/docs/css/print.css`);
                        });
                    }
                }
            ]
        };
        return this.mergeConfig();
    };
};

const pathReplace = (replaceFrom, replaceTo, replaceFile) => {
    const replaceCommand = `s#${replaceFrom}#${replaceTo}#g`;
    const spawnOptions = [
        '-i',
        replaceCommand,
        replaceFile
    ];
    setTimeout(() => {
        const proc = spawn('sed', spawnOptions); // pffft
        proc.on('error', (err) => {
            console.error('>>> ERROR', err);
        });
        proc.stdout.on('data', (data) => {
            console.log(data.toString());
        });
    }, 2000);
};
