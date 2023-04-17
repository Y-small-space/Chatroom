const express = require("express");
const app = express();

// 1.导入解析表单数据的中间件 body-parser
const parser = require('body-parser')
//2.注册中间件
app. use(parser. enlencoded({extended:false}))

app.post("/user", (req, res) => {
  // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
  console.log(res.body);
  res.send("ok!");
});


app.listen(80, () => {
  console.log("Express server running at http://127.0.0.1");
});
