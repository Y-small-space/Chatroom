const path = require("path");

module.exports={
    // 入口
    entry:"./src/main.js",//相对路径
    // 输出
    output:{
        // 文件的输出路径
        // __dirname nodejs的变量，代表当前文件夹目录
        path:path.resolve(__dirname,"dist"),// 绝对路径
        // 文件名
        filename:"main.js",
    },
    // 加载器
    module:{
        rules:[
            // loader的配置
            {
                test: /\.css$/,// 只检测.css文件
                use:[
                    "style-loader", // 将js中css通过创建style标签添加html文件中生效
                    "css-loader"// 将css资源编译成commonjs的模块到js中
                ] 
            },
            {
                test: /\.less$/i,
                use: [
                  // compiles Less to CSS
                  'style-loader',
                  'css-loader',
                  'less-loader',
                ],
            },
        ],
    },
    // 插件
    plugins:[
        // plugin的配置
    ],
    // 模式
    mode:"development",  
}