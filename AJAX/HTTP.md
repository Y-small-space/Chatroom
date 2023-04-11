# HTTP
HTTP Chypertext transport protoco1） 协议『超文本传输协议』，协议详细规定了浏览器和万维网服务器之间互相通信的规则。

## 请求报文
```
重点是参数格式：

行：POST /

头：   
    Host         
    Cookie 
    content
    Content-type
    User-Agent
```
## 响应报文
```
行: HTTP版本号 200 OK（响应字符串）
例子：HTTP/1.1 200 OK
头: Content-Type:text/html;charset=utf-8
    Content-length:2048
    Content-encoding:gzip
空行:
体: <html>
        <head>
        </head>
        <body>
            <h1>www</h1>
        </body>
    </html>
```
响应状态码：
* 404 找不到
* 403 forbidden没有权限
* 401 未授权
* 500 内部错误
* 200 ok