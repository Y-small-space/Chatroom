const http = require('http')

const server = http.createServer()

server.on('request',(req,res) =>{
    //1.req.ur1 是客户端请求的 URL 地址
    const url = req.url
    //2.req.method 是客户端发出的method属性
    const method = req.method

    //const str = `Your request url is ${url},and your request method is ${method}`
   
    //解决中文乱码问题，当洞用 res.end0 方法，向容广端发送中文内容的时候，会出现乱码问题，
    //此时，需要手动设置内容的编码格式：
    const str = `你请求的url地址是${url}，请求的method类型是 ${method}`
    //为了防止中文显示乱码的问题，需要设置响应头Content-Type的值为text/html:charset=utf-8
    res.setHeader('Content-Type','text/html;charset=utf-8')
    //把包含中文的内容，响应给客户端
     //调用res.end方法
     res.end(str)
})

server.listen(80,()=>{
    console.log('server running at Server running at http://127.0.0.1')
})