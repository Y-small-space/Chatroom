//步骤1:导入需要的模块
const fs = require('fs')
const http = require('http')
const path = require('path')

//步骤2:创建基本的web服务器
//创建web服务器
const server = http.createServer()

//监听web服务器的request事件
server.on('request',(req,res) => {
    //3.1获取到客户端请求的 URL 地址
    //  /clock/index.html
    //  /clock/index.css
    //  /clock/index. js
    const url = req.url
    
    //3.2把请求的URL地址映射为具体文件的存放路径
    const fpath = path.join(__dirname, url)

    //4.1根据“映射”过来的文件路径读取文件的内容
    fs.readFile(fpath,'utf8', (err,dataStr)=>{
        //4.2读取失败，向客户端响应固定的“错误消息”
        if(err) return res.end('404!!!!!!NOT FOUND')
        //4.3读取成功，将读取成功的内容，响应给客户端
        res.end(dataStr)
    })
})
//启动服务器
server.listen(8080,()=>{
    console.log('Server listen at http://127.0.0.1')
})