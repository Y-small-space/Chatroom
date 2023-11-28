// 1. 导入 http 模块
const http = require('http')

// 2. 创建服务对象
const server = http.createServer((req,res)=>{
  // 获取请求的方法
  console.log(req.method);
  // 获取请求的URL
  console.log(req.url);
  // 获取http协议的版本号
  console.log(req.httpVersion);
  // 获取http的请求头
  console.log(req.headers);
  res.end('http');
})

// 3. 监听端口
server.listen(8000,()=>{
  console.log('server on')
})