/* 
1.模块化路由
    为了方便对路由进行模块化的管理,Express不建议将路由直接挂载到 app上,
而是推荐将路由抽离为单独的模块。

    步骤如下：
        1.创建路由模块对应的.js文件
        2.调用express.Router()函数创建路由对象
        3.向路由对象上挂载具体的路由
        4.使用module.exports向外共享路由对象
        5.使用app.use()函数注册路由模块

    为路由模块添加前缀
    类似于托管静态资源时，为静志资源統一挂载访问前级样，路由模块添加前缀的方式也非常简单：
    1．导入路由模块
    const userRouter = require(' ./router /user. js')
    2. 使用 app.use(）注肪路由模央，井添加統一的可前祭/api
    app.use('/api', userRouter)
*/
const express = require('express');
const router = require('./6.Router');
const app = express();
//注意：app.use()函数的作用，就是来注册全局中间件
app.use('/api',router);

app.listen(8090,()=>{
    console.log('http://127.0.0.1:8090');
})