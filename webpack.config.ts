const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: './dist/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js'],
    },
    target: 'node',
    externals: [nodeExternals()],
    mode: 'development',
};
