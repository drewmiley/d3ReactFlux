module.exports = function (config) {

    config.set({
        baseUrl: '.',
        browsers: ['Chrome'],
        files: [
            {pattern: 'test/index.jsx', watched: true},
            {pattern: 'test/**/*.js', watched: true},
            {pattern: 'test/**/*.jsx', watched: true},
            {pattern: 'test/**/**/*.jsx', watched: true}
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test/index.jsx': ['webpack', 'coverage'],
            'test/**/*.js': ['webpack', 'coverage'],
            'test/**/*.jsx': ['webpack', 'coverage'],
            'test/**/**/*.jsx': ['webpack', 'coverage']
        },
        reporters: ['dots'],
        colors: true,
        port: 9876,
        reporters: ['progress', 'coverage'],
        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/, exclude: /node_modules/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['react']
                        }
                    },
                ],
            },
            resolve: {
                extensions: ['*', '.js', '.jsx']
            },
            watch: true
        },
        webpackServer: {
            noInfo: true,
        },
    });
};
