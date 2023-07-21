// 引入一个包
const path = require('path');
// 引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack 中的所有配置信息都应该卸载 module.exports 中
module.exports = {
    // 指定入口文件
    entry:'./src/index.ts',

    // 指定打包文件所在目录
    output:{
        // 指定打包文件的目录
        path: path.resolve(__dirname,'dist'),
        // 打包后文件的文件
        filename:"bundle.js"
    },

    // 指定 webpack 打包时要使用模块
    module:{
        // 指定要加载的规则
        rules:[
            {
                // test 指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: 'ts-loader',
                // 要排除的文件
                exclude: /node_modules/
            },

            // 设置less文件的处理
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    mode:"development",
    // 配置Webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //title:"这是一个自定义的title"
            template: "./src/index.html"
        }),
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}