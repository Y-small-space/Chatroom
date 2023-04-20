const express = require('express');
const app = express();
const cors = require('cors')

//一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
const cors = require('cors');
app.use(cors());

//一定要在路由前面配置cors中间件，从而解决接口跨域问题
app.use(cors());
//配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));

//导入路由模块
const router = require('./1.apiRouter');
//把路由模块，注册到app上
app.use('/api',router);


app.listen(8090,()=>{
    console.log('Express server running at http://127.0.0.1:8090');
})