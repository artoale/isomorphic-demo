const path = require('path'),
    webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            './client/index.js'
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets/'),
        publicPath: '/dist/assets/',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                }],
            }
            //loaders for other file types can go here
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}