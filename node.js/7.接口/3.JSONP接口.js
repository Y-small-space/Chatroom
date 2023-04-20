/* 
JSONP接口
    1.回顾 JSONP 的概念与特点   
        概念：浏览器端通过 <script>标签的src属性,请求服务器上的数据,同时,服务器返回一个函数的调用。这种请求数据的方式叫做JSONP.
        特点：
            ① JSONP不属于真正的Ajax请求，因为它没有使用 XMLHttpRequest 这个对象。
            ② JSONP仅支持GET请求，不支持 POST、PUT、DELETE 等请求。
    
    2.创建 JSONP 接口的注意事项
        如果项目中已经配置了 CORS 跨域资源共享，为了防止冲突，必须在配置 CORS 中间件之前声明JSONP的接口。否则
    JSONP接口会被处理成开启了 CORS 的接口。示例代码如下：
        
        优先创建 JSONP 接口【这个接口不会被处理成 CORS 接口】
        app.get('/api/jsonp', (req, res) => {})
        
        再配置 CORS 中间件【后续的所有接口，都会被处理成 CORS 接口】
        app.use(cors())

        这是一个开启了 CORS 的接口
        app.get('/api/get', (reg, res) => {})

    3.实现 JSONP 接口的步骤
        1).获取客户端发送过来的回调函数的名字
        2).得到要通过 JSONP 形式发送给客户端的数据
        3).根据前两步得到的数据，拼接出一个函数调用的字符串
        4).把上一步拼接得到的字符串，响应给客户端的 <script> 标签进行解析执行

    4.实现 JSONP 接口的具体代码
        app.get('/api/jsonp', (reg, res) 
        const funcName = req.query .callback
        const data = f name 'zs', age: 22 }
        const scriptstr = “$tfuncName)($(JSoN. stringify(data))'
        res.send (scriptStr)
*/