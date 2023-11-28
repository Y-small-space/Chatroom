const http = require('http');
const url = require('url');


const server = http.createServer((req,res)=>{
  // 2.解析request.url
  // console.log(req.url)
  let res = url.parse(req.url,true);
  console.log(res);
  // 路径
  let pathname = res.pathname;
  // 查询字符串
  let keyword = res.query.keyword;

  res.end('url');
})

server.listen(3000,()=>{
  console.log('server on ......');
})