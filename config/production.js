const
    fs = require('fs-extra'),
    ConfigClass = require('./config.js');
    spawn = require('child_process').spawn;

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
                            const replaceFrom = '/css';
                            const replaceTo = '/tech-radar/css';
                            const replaceCommand = `s#${replaceFrom}#${replaceTo}#g`;
                            fs.copySync(`${this.appPath}/public/`, `${this.appPath}/dist/prod`);
                            fs.copySync(`${this.appPath}/dist/prod`, `${this.appPath}/docs`);

                            // for github, with fonts
                            const spawnOptions = [
                                '-i',
                                replaceCommand,
                                `${this.appPath}/docs/css/bundle.css`
                            ];
                            console.log('>>> sed', spawnOptions);
                            setTimeout(() => {
                                const proc = spawn('sed', spawnOptions); // pffft
                                proc.on('error', (err) => {
                                    console.error('>>> ERROR', err);
                                });
                                proc.stdout.on('data', (data) => {
                                    console.log(data.toString());
                                });
                                proc.stderr.on('data', (data) => {
                                    console.log(data.toString());
                                });
                            },2000);

                        });
                    }
                }
            ]
        };
        return this.mergeConfig();
    };
};