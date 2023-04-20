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
*/