// 引入一个包
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

// webpack 中的所有配置信息都应该写在 module.exports 中
module.exports = {

    // 指定入口文件 
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        // 指定打包文件所在目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的文件
        filename: "bundle.js"
    },

    // 指定webpack打包时要用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: 'ts-loader',
                // 要排除的文件 
                exclude: /node_modules/
            }
        ]
    },
    
    mode: 'development',
    plugins:[
        new HtmlWebpackPlugin({
            //title:"这是一个自定义的title"
            template:"./src/index.html"
        }),
    ]   
}