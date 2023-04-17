const express = require('express');
const app = express();

/* 
局部生效的中间件：
    不使用 app.use()定义的中间件，叫做局部生效的中间件，示例代码如下： 
*/
const mw1 = function(req,res,next){
    console.log("调用了第一个局部生效的中间件");
    next();
}
const mw2 = function(req,res,next){
    console.log("调用了第二个局部生效的中间件");
    next();
}

// mw 这个中间件只在“当前路由中生效”，这种用法属于“局部生效的中间件”
//以下两种方式等价
app.get('/',mw1,mw2,function(req,res){
    res.send('Home page');
})
app.get("/",[ mw1, mw2], function (req, res) {
  res.send("Home page");
});


// mw 这个中间件不会影响下面这个路由
app.get('/user',function(){
    res.send('User page')
})


app.listen(80);

/*
了解中间件的5个使用注意事项
1.一定要在路由之前注册中间件
2.客户端发送过来的请求，可以连续调用多个中间件进行处理
3.执行完中间件的业务代码之后，不要忘记调用next()函数
4.为了防止代码逻辑混乱，调用next()函数后不要再写额外的代码
5.连续调用多个中间件时，多个中间件之间，共享req 和res对象
*/ 