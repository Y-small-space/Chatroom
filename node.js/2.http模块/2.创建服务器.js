 //1.导入http模块
 const http = require('http')
 //2.创建web服务器实例
 const server = http.createServer()
 //3.为服务器实例绑定request事件，监控客户端的请求
 server.on('request',function(err,res){
    console.log('Someone visit our web server.')
 })
 //4.启动服务器
 server.listen(8080,function(){
    console.log('Server running at http://127.0.0.1:8080')
 })