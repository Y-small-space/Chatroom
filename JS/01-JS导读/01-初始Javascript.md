# 1.初识JavaScript

## 1.1 JavaScript历史

* 布兰登艾奇(BrendanEich,1961年~)。
* 神奇的大哥在1995年利用10天完成JavaScript设计。
* 网景公司最初命名为LiveScript，后来在与Sun合作之后将其改名为JavaScript.

## 1.2JavaScript是什么

* JavaScript是世界上最流行的语言之一，是一种运行在客户端的脚本语言（Script是脚本的意思）
* 脚本语言：不需要编泽，运行过程中由js解释器(js引擎)逐行来进行解释并执行
* 现在也可以基于Node.js技术进行服务器端编程

## 1.3JavaScript的作用

* 表单动态校验（密码强度检测）（**JS产生最初的目的**）
* 网页特效
* 服务端开发(Nodejs)
* 桌面程序(Electron)
* App(Cordova)
* 控制硬件-物联网(Ruff)
* 游戏开发(cocos2d-js)

## 1.4 HTML/CSS/JS 的关系

**HTML/CSS 标记语言-描述类语言**:

* HTML决定网页结构和内容(決定看到什么)，相当于人的身体
* CSS决定网页呈现给用户的模样(决定好不好看)，相当于给人穿衣服、化收

**JS 脚本语言-编程类语言**:

* 实现业务逻辐和页面控制(决定功能)，相当于人的各种动作

## 1.5 浏览器执行JS简介

浏览器分成两部分：渲染引擎和 JS 引擎

* 渲染引擎：用来解析HTML与CSS，俗称内核，比如chrome 浏览器的blink，老版本的webkit
* 引擎：也称为 JS 解释器。用来读取网页中的JavaScript代码，对其处理后运行，比如chrome 浏览器的 V8

**浏览器本身并不会执行JS代码，而是通过内置JavaScript引擎(解释器) 来执行JS代码。JS引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机去执行，所以 JavaScript 语言归为脚本语言，会逐行解释执行。**

## 1.6 JS的组成

### 1.6.1 ECMAScirpt

**ECMASEript**是由ECMA国际（ 原欧洲计算机制造商协会）进行标准化的一门编程语言，这种语言在万维网上应助广泛，它往往被称为JavaScript或JScript，但实际上后两者是 ECMAScript 语言的实现和扩展。

**ECMAScript : ECMAScript规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套S语法工业标准。**

### 1.6.2 DOM--文档对象模型

**文档对象模型**（Document Object Model，简称DOM），是W3C组织推荐的处理可扩展标己语言的**标准编程接口**。通过 DOM 提供的接口可以对页面上的各种元素进行操作（大小 位置、颜色等）。

### 1.6.3 BOM--浏览器对象模型

**BOM**(Browser Object Model ，简称BOM)是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等。

## 1.7 JS的位置

JS有3种书写位置，分别为行内、内嵌和外部。

### 1.7.1 行内式 JS

    <input type="outton" value="点我武试”onclick-"alert ('He11o world" )" />

* 可以将单行或少量JS代码写在HTML标签的事件属性中（以 on 开头的属性），如：onclick
* 注意单双引号的使用：在**HTML**中我们推荐使用**双引号**,**JS** 中我们推荐使用**单引号**
* 可读性差，在html中编写JS大量代码时，不方便阅读；
* 引号易错，引号多层嵌套匹配时，非常容易弄混；
* 特殊情况下使用

### 1.7.2 内嵌JS

    <script>
        alert('Hello World~!');
    </script>

* 可以将多行JS代码写到\<script>标签中
* 内嵌 JS 是学习时常用的方式

### 1.7.3 外部JS文件

    <script src="my.js"></script>

* 利于HTML页面代码结构化，把大段JS代码独立到HTML页面之外，既美观，也方便文件级别的复用
* 引用外部JS文件的 script 标签中间不可以写代码
* 适合于JS代码量比较大的情况