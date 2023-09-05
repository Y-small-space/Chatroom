# 2. jQuery的基本使用

## 2.1 jQuery的使用步骤

1. 引入jQuery文件

## 2.2 jQuery的入口函数

    $(function(){
        ... // 此处是页面DOM加载完成的入口
    })

    $(document).ready(function(){
        ... // 此处是页面DOM加载完成的入口
    })

1. 等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery帮我们完成了封装
2. 相当于原生js中的DOMContentLoaded
3. 不同于原生js中的load事件是等页面文档、外部js文件、css文件、图片加载完毕才执行内部代码

## 2.3 jQuery的顶级对象$

1. $是jQuery的别称，在代码中可以使用jQuery代替$，但一般为了方便，通常都直接使用$。
2. $是jQuery的顶级对象，相当于原生Javascript中的window。把元素利用$包装成jQuery对象，就可以调用jQuery的方法。

## 2.4 jQuery对象和DOM对象

DOM对象与jQuery对象之间是相互可以转换的。

因为原生js比jQuery更大，原生的一些属性和方法jQuery没有给我们封装。要想使用这些属性和方法需要把jQuery对象转换为DOM对象才能使用。

1. DOM对象转换为jQuery对象：

        $(DOM对象)

2. jQuery对象转换为DOM对象（两种方式）

        $('div')[index] index是索引号

        $('div').get(index) index是索引号

