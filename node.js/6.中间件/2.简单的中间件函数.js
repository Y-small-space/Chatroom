/* 
1.定义中间件函数
    可以通过如下的方式，定义一个最简单的中间件函数： 
*/
//常量 mw 所指向的，就是一个中间件函数
const express = require('express')
const app = express();

//定义一个最简单的中间件函数
const mw = function(req,res,next){
    console.log("这是一个最简单的中间件函数");
    //注意：在当前中间件的业务处理完毕后，必须调用next()函数
    //表示把流转关系转交给下一个中间件或路由
    next();
}

//将mv注册为全局生效的中间件
app.use(mw);

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})