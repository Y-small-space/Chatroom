# 3.CSS字体属性

CSS Fonts(字体)属性用于定义字体系列、大小粗细、和文字样式(如斜体)。

## 3.1 字体系列

CSS 使用 **font-family** 属性定义文本的字体系列。

    p { font-fanily: "微软雅黑";}
    div {font-family: Arial, "Microsoft Yahei", "徽软雅黑";}

* 各种字体之间必须使用英文状态下的逗号隔开。
* 一般情况下,如果有空格隔开的多个单词组成的字体加引号。
* 尽量使用系统默认自带字体，保证在任何用户的浏览器中都能正确显示。
* 最常见的几个字体：body {font-family:'Microsoft YaHei',tahoma,arial, 'Hiragino Sans GB';}

## 3.2 字体大小

CSS 使用 **font-size**属性定义字体大小。

    p {
        font-size: 20px;
    }

* px（像素）大小是我们网页的最常用的单位
* 谷歌浏览器默认的文字大小为16px
* 不同浏览器可能默认显示的字号大小不一致，我们尽量给一个明确值大小，不要默认大小
* 可以给body 指定整个页面文字的大小

## 3.3 字体粗细

CSS 使用 **font-weight** 属性设置文本字体的粗细。

    p {
        font-weight: bold;
    }

|属性值|描述|
|:-:|:-:|
|normal|默认值(不加粗的)|
|bold|定义粗体(加粗的)|
|100～900|400等同于normal，而700等同于bold注意这个数字后面不跟单位|

* 学会让加粗标签(比如h和strong等)不加粗，或者其他标签加粗
* **实际开发时，我们更喜欢用数字表示粗细**

## 3.4 文字样式

CSS 使用 font-style 属性设置文本的风格。

    p {
        font-style: normal;
    }

|属性值|作用|
|:-:|:-:|
|normal|默认值，浏览器会显示标准的字体样式 font-style:normal;|
|italic|浏览器会显示斜体的字体样式。|

**注意：平时我们很少给文字加斜体，反而要给斜体标签（em，i）改为不倾斜字体。**

## 3.5 字体复合属性

字体属性可以把以上文字样式综合来写,这样可以更节约代码：

    body {
        font: font-style font-weight font-size/line-height font-family;
    }

* 使用font属性时，必须按上面语法格式中的顺序书写，**不能更换顺序**，并且各个厲性间以**空格**隔开
* 不需要设置的属性可以省路（取默认值），但**必须保留 font-size 和 font-family 属性**，否则 font 属性将不起作用

## 3.6 字体属性总结

|属性|表示|注意点|
|:-:|:-:|:-:|
|font-size|字号|我们通常用的单位是 px 像素，一定要跟上单位|
|font-family|字体|实际工作中按照团队约定来写字体|
|font-weight|字体粗细|记住加粗是 700 或者 bold 不加粗是 normal 或者 400 记住数字不要跟单位|
|font-style|字体样式|记住倾斜是 italic 不倾斜是 normal 工作中我们最常用 normal|
|font|字体连写|1.字体连写是有顺序的 不能随意换位置 2.其中 字号 和 字体 必须同时出现|

