# Window

## BOM

BOM(Browser Object Model ) 是浏览器对象模型

Window:

* navigator
* location
* document
* history
* screen

* window对象是一个全局对象，也可以说是Javascript中的顶级对象
* 像document.alert()、console.log()这些都是window的属性，基本BOM的属性和方法都是window的。
* 所有通过var定义在全局作用域中的变量、函数都会变成window对象的属性和方法
* window对象下的属性和方法调用的时候可以省略window

## 定吋器-延吋函数

Javascript 內置的一个用来让代码延迟执行的西数，叫 setTimeout

语法：

    setTimeout（回调函数，等待的毫秒数）

setTimeout 仅仅只执行一次，所以可以理解为就是把一段代码延迟执行，平时省略window

清除延时函数：

    let timer = setTimeout(回调函数,等待的毫秒数)
    clearTimeout(timer)

注意点：

* 延时器需要等待,所以后面的代码先执行
* 每一次调用延时器都会产生一个新的延时器

**两种定时器对比：执行的次数**:

* 延时函数：执行一次
* 间歇函数：每隔一段时间就执行一次,除非手动清除

## JS执行机制

Javascript 语言的一大特点就是**单线程**，也就是说，**同一个时间只能做一件事**。

这是因为 Javascript 这门脚本语言诞生的使命所致—-Javascript 是为处理页面中用户的交互，以及操作DOM 而诞生的。比如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。应该先进行添加，之后再删除。

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是：如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

为了解决这个问题，利用多核 CPU 的计算能力，HTML5提出 web worker 标准，允许JavaScript脚本创建多个线
程。于是，JS 中出现了同步和异步。

**同步**：
    前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步做法：我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜。

**异步**：
    你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情。比如做饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜。

**他们的本质区别：这条流水线上各个流程的执行顺序不同**。

**同步任务**：
    同步任务都在主线程上执行，形成一个执行栈。

**异步任务**：
    JS的异步是通过回调函数实现的。

    一般而言，异步任务有以下三种类型：

1. 普通事件，如 click、resize 等
2. 资源加载，如 load、error 等
3. 定吋器，包括 setInterval、setTimeout 等

异步任务相关添加到**任务队列**中(任务队列也称为消息队列).

**JS 执行机制**:

1. 先执行执行栈中的同步任务。
2. 异步任务放入任务队列中。
3. 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行。

由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为事件循环 (event loop)。

## location対象

* location 的数据类型是对象，它拆分并保存了 URL 地址的各个组成部分
* 常用属性和方法：

1. href 属性获取完整的 URL地址，对其赋值时用于地址的跳转
2. hash 属性获取地址中的哈希值，符号＃后面部分
3. reload 方法用来刷新当前页面，传入参数true 时表示强制刷新
4. search 属性获取地址中携带的参数，符号？后面部分

## navigator对象

* navigator的数据类型是对象，该对象下记录了浏览器自身的相关信息
* 常用属性和方法：
  * 通过 userAgent 检测浏览器的版本及平台

        //检测 useAgent(浏览器信息)
        !(function(){
            const userAgent = navigator.userAgent
            //验证是否为Android或iPhone
            const android = userAgent.match(/(Android);?[¥s¥/]+([¥d.]+)?/)
            const iphone = userAgent.match(/(iPhone¥sOS)¥s([¥d_]+)/)
            //如果是Android或iPhone，则跳转至移动站点
            if (android || iphone) {
                location.href = 'http://m.itcast.cn'
            }
        })()

## history对象

* history 的数据类型是对象，主要管理历史记泉，该对象与浏览器地址栏的操作相对应，如前进、后退、历史记录等
* 常用属性和方法：

|history对象方法|作用|
|:------------:|:-:|
|back()|可以后退功能|
|forward()|前进功能|
|go(参数)|前进功能 参数如果是1前进一个界面 如果是-1后退一个界面|
