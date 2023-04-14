//这是路由模块
//1.导入express
var express = require('express');

//2.创建路由对象
var router = express.Router();


//3.挂载具体路由
router.get('/user/list', (req, res)=>{
    
    //设置响应头 允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    //响应头
    res.setHeader('Access-Control-Allow-Headers','*');

    res.send('GET success!'); 
})

router.post('/user/list',(req, res)=>{
    
    //设置响应头 允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    //响应头
    res.setHeader('Access-Control-Allow-Headers','*'); 

    res.send('POST success!');
})

//4.向外导出路由对象 
module.exports = router;