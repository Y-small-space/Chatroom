const express = require('express');
const router = express.Router();

//这里挂载对应的路由
router.get('/get',(req,res)=>{
  //通过req.query获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query;
  // res.setHeader("Access-Control-Allow-Origin", "*");
  //调用res.send()方法，向客户端响应处理的结果
  res.send({
    status: 0, //0表示处理成功，1表示处理失败
    msg: "GET请求成功！", //状态的描述
    data: query, //需要响应给客户端的数据
  });
})

router.post('/post',(req,res)=>{
  //1.获取客户端通过请求体，发送到服务器的URL-encoded数据
  //注意：如果要获取 URL-encoded 格式的请求体数据，
  //必须配置中间件 app.use(express.urlencoded({extended: false}))
  const body = req.body;
  // res.setHeader("Access-Control-Allow-Origin", "*");
  //2.调用res.send()方法，把数据响应给客户端
  res.send({
    status: 0, //0表示成功；1表示失败
    msg: "Post请求成功！", //状态描述消息
    data: body, //需要响应给客户端的具体数据
  });
})

module.exports = router;
