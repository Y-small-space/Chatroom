const qs = require("querystring");

const bodyprase = (req, res, next) => {
  //定义中间件具体的业务逻辑
  //1.定义一个str字符串，专门用来存储客户端发送过来的请求体数据
  let str = "";

  //2.监听req的data事件
  req.on("data", (chunk) => {
    str += chunk;
  });

  //3.监听req的end事件
  req.on("end", (chunk) => {
    //在 str 中存放的是完整的清求体数据
    //console.log(str);
    //TODO: 把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(); //调用 qs.parse(）方法，把査自字符串解析为対象
    req.body = body; //将解析出来的清求体对象，挂载为reg.body属性
    next(); //最后一定要调用 next(）函数，执行后续的业务逻辑
  });
};

module.exports = bodyprase;
