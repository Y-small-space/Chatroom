/* 
中间件的分类:
    为了方便大家理解和记忆中间件的使用，Express 官方把常见的中间件用法，分成了5大类，分别是：
        1.应用级别的中间件
        2.路由级别的中间件
        3.错误级别的中间件
        4.Express内置的中间件
        5.第三方的中间件 
*/

/* 
1. 应用级别的中间件:
通过 app.use()或 app.get()或 app.post(),綁定到app实例上的中间件,叫做应用级别的中间件，代码示例如下：
    
    应用级别的中间件（全局中间件）
    app.use((req, res, next) => {
        next()
    })
    应用级别的中间件（局部中间件）
    app.get('/', mw1, (reg, res) => {res.send( 'Home page.')})
*/

/* 
2.路由级别的中间件
    绑定到 express.Router()实例上的中间件,叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。
只不过,应用级别中间件是绑定到app实例上，路由级别中间件绑定到router实例上，代码示例如下：

    var app = express()
    var router = express.Router ()
    
    router.use(function(req, res, next){
        console.log('Time:', Date.now()))
        next()
    })
    app.use('/', router)
*/

/* 
3. 错误级别的中间件
    错误级别中间件的作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。

    格式：错误级别中间件的function处理函数中，必须有4个形参，形参顺序从前到后，分别是 (err, req, res, next)

        app.get('/',function(req, res){                   路由
            throw new Error('服务器内部发生了错误！')           抛出自定义错误
            res. send('Home Page.')
        })
        app.use(function(err, req, res, next){              错误级别中间件
            console. log('发生了错误:'+ err.message）           在服务器上打印错误信息
            res.send('Error!'+ err .message)                    向客户端响应错误相关的信息
        })

    注意：
        错误级别的中间件，必须注册在所有路由之后！
*/

/*
4.内置中间件 
从4.x版本开始，Express不再依赖于Connect。
Express 内置了3个常用的中间件，极大的提高了Express项目的开发效率和体验

    Express具有以下内置中间件功能：
    express.static()提供静态资产，如HTML文件、图像、CSS样式等。（无兼容性）
    express.json() 使用JSON有效负载解析传入的请求。注意：适用于Express 4.16.0+
    express.urlencoded() 使用URL编码的有效负载解析传入请求。注意：适用于Express 4.16.0+ 
*/

/*
5.第三方的中间件
    非Express 言方内置的，而是由第三方开发出来的中间件，叫做第三方中间件。
    在项目中，大家可以按需下载并配置第三方中间件，从而提高项目的开发效率。
    例如：在express@4.16.0 之前的版本中，经常使用 body-parser 这个第三方中间件，来解析请求体数据。
    使用步骤如下：
    ① 运行 npm install body-parser 安装中间件
    ② 使用require() 导入中间件
    ③ 调用 app.use()注册并使用中间件
    
    注意：Express 内置的express.urlencoded 中间件，就是基于 body-parser 这个第三方中间件进一步封装出来的
*/