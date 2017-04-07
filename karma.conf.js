module.exports = function (config) {

    config.set({
        baseUrl: '.',
        browsers: ['Chrome'],
        files: [
            {pattern: 'tests.webpack.js', watched: true},
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'tests.webpack.js': ['webpack'],
        },
        colors: true,
        port: 9876,
        reporters: ['dots'],
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
