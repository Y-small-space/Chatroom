/*
CORS 跨域资源共享
    1. 接口的跨域问题
        刚才编写的 GET 和 POST接口，存在一个很严重的问题：不支持跨域请求。
    解決接口跨域问题的方案主要有两种： 
        ① CORS （主流的解決方案，推荐使用）
        ② JSONP（有缺陷的解决方案：只支持 GET 请求）

    2. 使用 cors 中间件解决跨域问题
        cors 是Express的一个第三方中间件。
        通过安装和配置 cors 中间件，可以很方便地解決跨域问题。
        cors 是Express 的一个第三方中间件。通过安装和配置 cors 中间件，可以很方便地解决跨域问题。
        使用步骤分为如下3步：
        ① 运行  npm install cors 安装中回件
        ② 使用 const cors = require('cors') 导入中间件
        ③ 在路由之前调用 app.user(cors())配置中间件

    3. 什么是 CORS
        CORS (CrosS-Origin Resource Sharing，跨域资源共享）由一系列 HTTP 响应头组成，这些 HTTP 响应头决定
        浏览器是否阻止前端JS 代码跨域获取资源。
        浏览器的同源安全策略默认会阻止网页“跨域〞获取资源。但如果接口服务器配置了 CORS 相关的 HTTP 响应头，就可以解除浏览器端的跨域访问限制。

    4. CORS 的注意事项
        1).CORS 主要在服务器端进行配置。客户端划览器无须做任何额外的配置，即可请求开启了 CORS 的接口。
        2).CORS 在浏览器中有兼容性。只有支持XMLHttpRequestLevel2 的浏览器，才能正常访问开启了 CORS 的服
        务端接口（例如：IE10+、Chrome4+, FireFox3.5+).

    5. CORS 响应头部- Access-Control-Allow-Origin
        响应头部中可以携带一个 Access-Control-Allow-Origin 字段，其语法如下：
            Access-Control-Allow-Origin: <origin> | *
        其中，origin 参数的值指定了允许访问该资源的外域 URL。
        例如，下面的字段值将只允许来自 http://itcast.cn 的请求：
            res.setHeader ('Access-Control-Allow-Origin', 'http://itcast.cn')
        如果指定了 Access-Control-Allow-Origin 字段的值为通配符*，表示允许来自任何域的请求，示例代码如下：
            res.setHeader ('Access-Control-Allow-Origin', '*')

    6. CORS 响应头部-Access-Control-Allow-Headers
        默认情况下，CORS 仅支持客户端向服务器发送如下的9个请求头：
        Accept, Accept-Language, Content-Language, DPR, Downlink, Save-Data, Viewport-Width, Width,
        Content-Type（值仅限于 text/plain、multipart/form-data、application/x-www-form-urlencoded 三者之一）
        如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过 Access-Control-Allow-Headers 对额外的请求头进行声明，否则这次请求会失败！
            例如：
                1). 允许客户端额外向服务器发送 Content-Type 请求头和 X-Custom-Header 请求头
                2). 注意：多个请求头之间使用英文的逗号进行分割
                3). res. setHeader('Access-Control-Allow-Headers','Content-Type, X-Custom-Header')
    
    7. CORS 响应头部-Access-Control-Allow-Methods
        默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求。
        如果客户端希望通过 PUT、DELETE 等方式请求服务器的资源，则需要在服务器端，通过 Access-Control-Alow-Methods
        来指明实际请求所允许使用的HTTP方法。
            例如：
                示例代码如下：
                只允许 POST、GET、DELETE、HEAD 清求方法
                    res.setHeader ('Access-Control-Allow-Methods', 'POST, GET, DELETE, HEAD')
                允许所有的 HTTP 请求方法
                    res.setHeader ('Access-Control-Allow-Methods', '*')

    8. CORS清求的分类
        客户端在请求 CORS 接口时，根据请求方式和请求头的不同，可以将 CORS 的请求分为两大类，分别是：
            ① 简单请求
            ② 预检请求

    9. 简单请求        
        同时满足以下两大条件的请求，就属于简单请求：
            ① 请求方式：GET、POST、HEAD 三者之ー
            ② HTTP头部信息不超过以下几种字段：无自定义头部字段、Accept、Accept-language、Content-Language、DPR、
            Downlink、 Save-Data、 Viewport-Width、 Width、 Content-Type（只有三个值application/x-www-form-
            urlencoded, multipart/form-data, text/plain)

    10. 预检请求
        只要符合以下任何一个条件的请求，都需要进行预检请求：
        1).请求方式为 GET、POST、HEAD 之外的请求 Method 类型
        2).请求头中包含自定义头部字段
        3).向服务器发送了 application/json 格式的数据
    
        在浏览器与服务器正式通信之前，浏览器会先发送 OPTION 请求进行预检，以获知服务器是否允许该实际请求，所以这一次的 OPTION 请求称为“预检请求”。
    服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据。

    11.简单请求和预检请求的区别
        简单请求的特点：客户端与服务器之间只会发生一次请求。
        预检请求的特点：客户端与服务器之间会发生两次请求，OPTION 预检请求成功之后，才会发起真正的请求。
*/