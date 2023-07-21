// 引入一个包
const path = require('path');
// 引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
                use: [
                    // 配置babel
                    {
                        loader:"babel-loader",
                        // 设置babel
                        options:{
                            // 设置预定义的环境
                            presets:[
                                // 配置环境的插件
                                "babel/preset-env",
                                // 配置信息
                                {
                                    // 要兼容的目标浏览器
                                    targets:{
                                        "chrome":"57",
                                        "ie":"11"
                                    },

                                    // 指定corejs的版本
                                    "corejs":"3",
                                    // 使用corejs的方式 "usage" 表示按需加载
                                    "useBuiltIns":"usage"
                                }
                            ]
                        }
                    }
                ],
                // 要排除的文件 
                exclude: /node_modules/
            }
        ]
    },

    mode: 'development',

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