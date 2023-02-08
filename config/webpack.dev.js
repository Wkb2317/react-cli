const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");  // 压缩css
const ESLintPlugin = require('eslint-webpack-plugin');
const { presetCssLoader } = require('./util/util')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'static/js/[name].js',
        path: undefined, // 开发环境不需要设置打包路径
        chunkFilename: 'static/js/[name].chunk.js',
        assetModuleFilename: 'static/media/[hash:10][ext][query]',
        clean: true
    },
    devtool: 'cheap-module-source-map'
    devServer: {
        static: path.resolve(__dirname, '../dist'),
        port: 3000,
        hot: true,   // 热更新
        compress: true, // 压缩
        open: true
    },
    module: {
        rules: [
            // css
            {
                test: /\.css/i,
                use: presetCssLoader()
            },
            {
                test: /\.less/i,
                use: presetCssLoader('less-loader')
            },
            {
                test: /\.s[ca]ss/i,
                use: presetCssLoader( 'sass-loader')
            },
            {
                test: /\.styl/i,
                use: presetCssLoader( 'stylus-loader')
            },
            // img
            {
                test: /\.(png|jpg|jpeg|gif|svg)/i,
                type: 'asset/resource',
                parser:{
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            // js
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use:  [{
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true, // 开启缓存，优化打包速度
                    }
                }],
            }
        ]
    },
    plugins: [
        // 处理html,将html文件移动到打包目录中
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        //压缩css
        new CssMinimizerPlugin(),
        // eslint
        new ESLintPlugin() 
    ],
    optimization: {
        minimize: true,
    },
}
