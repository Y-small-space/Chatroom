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
            {
                test:/\.s[ac]ss$/,
                // loader: 'xxx',// 只能使用1个loader
                use:[
                    // 使用多个loader
                    "style-loader",
                    "css-loader",
                    "sass-loader",// 将sass编译成css文件 
                ]
            },
            {
                test:/\.styl$/,
                // loader: 'xxx',// 只能使用1个loader
                use:[
                    // 使用多个loader
                    "style-loader",
                    "css-loader",
                    "stylus-loader",// 将sass编译成css文件 
                ] 
            },
            {
                test:/\.(png|jpe?g|gif|webp|svg)$/,
                type:"asset",
                parser:{
                    dataUrlCondition:{
                        // 小于10kb的图片转base64
                        // 优点：减少请求数量 缺点：体积会更大
                        maxSize:10*1024,//10kb 
                    }
                }
            }
        ],
    },
    // 插件
    plugins:[
        // plugin的配置
    ],
    // 模式
    mode:"development",  
}