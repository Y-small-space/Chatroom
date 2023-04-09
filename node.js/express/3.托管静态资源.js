const express = require("express")
const app = express()


//在这里，调用express.static()方法，快速的对外提供静态资源
/* 
挂载路径前缀
如果希望在托管的静态资源访问路径之前，挂载路径前级，则可以使用如下的方式： 
app. use(" Public', express.static('public'))
*/
app.use(express.static('../resource2/src'))

app.listen(8070,()=>{
    console.log('express server running at http:127.0.0.1:8070')
})