/* 
自定义中间件
    1.需求描述与实现步骤
        自己手动模拟一个类似于 express.urlencoded 这样的中间件，来解析 POST 提交到服务器的表单数据。
    实现步骤：
    1).定义中间件
    2).监听 req的 data  事件
    3).监听 req的 end 事件
    4).使用 querystring 模块解析清求体数据
        Nodejs内置了一个querystring 模块，专门用来处理查询字符串。
        通过这个模块提供的parse()函数，可以轻松把查询字符串，解析成对象的格式。示例代码如下：
    5).将解析出来的数据对象挂载为req.body
        上游的中间件和下游的中间件及路由之间，共享同一份 req 和res。因此，我们可以将解析出来的数据，
        挂载为req的自定义属性，命名为 req.body，供下游使用。示例代码如下：
    6).将自定义中间件封装为模块 
        为了优化代码的结构，我们可以把自定义的中间件函数，封装为独立的模块，示例代码如下：
*/


//导入express模块
const express = require('express');
//创建express的服务器实例
const app = express();

//1.导入自己封装的中间件模块
const bodyprase = require('./7.custom-body-parser');
//2.将自定义的中间件函数，注册为全局可用的中间件
app.use(bodyprase);

app.post('/user',(req,res)=>{
    res.send(req.body);
})

app.listen(80,()=>{
    console.log("Express server running at http://127.0.0.1");
})


