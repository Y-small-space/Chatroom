//1.导入express
const express = require('express');
//2.创建web服务器
const app = express();

/* /4.监听客户端的GET和POST请求，并向客户端响应具体的内容
app.get('/user',(res,req)=>{
    //调用express提供的res.send（）放发，向客户端响应一个JSON对象
    res.send({name:'zs',age:20,gender:'男'})
}) */
app.post('/server',(req,res)=>{
    //设置响应头
    res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500')
    //调用express提供的send()
    //设置响应体
    res.send('请求成功POST')
});
app.get('/server',(req,res)=>{
    //设置响应头
    res.setHeader('Access-Control-Allow-Origin','*')
    //调用express提供的send()
    //设置响应体
    res.send('请求成功GET')
})
app.all('/server',()=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    res.send('HELLO AJAX JSON!');
})
app.all('/json-server',(req,res)=>{
    //设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    //响应头
    res.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    const data = {
        name : 'sa',
        age : 'dwiu' 
    };
    
    let str = JSON.stringify(data);

    res.send(str);
})
app.get('/ie',(req,res)=>{
    //设置响应头 允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    //调用express提供的send()
    //设置响应体
    res.send('IE');
})
app.get('/delay',(req,res)=>{
    //设置响应头 允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    //调用express提供的send()
    //设置响应体
    setTimeout(()=>{
        res.send('延时响应');
    },3000)
})
/* app.get('/jQuery-server',(req,res)=>{
    //设置响应头 允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    //调用express提供的send()
    //设置响应体
    res.send("hello jQuery-server!");
})
app.post ('/jQuery-server',(req,res)=>{
    //设置响应头 允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    //调用express提供的send()
    //设置响应体
    res.send("hello jQuery-server!");
}) */
//jQuery 服务
app.all('/jQuery-server',(req,res)=>{
    //设置响应头 允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    //响应头
    res.setHeader('Access-Control-Allow-Headers','*'); 
    //调用express提供的send()
    //设置响应体
    const data = {name:'a',age:'1'}
    res.send(JSON.stringify(data))
})
//axios
app.all('/Axios',(req,res)=>{
    //设置响应头 允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    //响应头
    res.setHeader('Access-Control-Allow-Headers','*'); 
    //调用express提供的send()
    //设置响应体
    const data = {name:'a',age:'1'}
    res.send(JSON.stringify(data))
})
/* app.use(cors({
    origin: 'http://127.0.0.1:5500',
})); */

//3.启动web服务器
app.listen(8000,()=>{
    console.log('express server running at http://127.0.0.1:8000');
})