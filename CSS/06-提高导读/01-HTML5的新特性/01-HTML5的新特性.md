# 1.HTML5的新特性

HTML5的新特性主要是针对于以前的不足，增加了一些新的标签、新的表单和新的表单属性等。

这些新特性都有兼容性问题，基本是IE9+以上的浏览器才支持，如果不考虑兼容性问题，可以大量使用这些新特性。

声明：

1. 新特性增加了很多，但是我们专注于开发常用的新特性。
2. 基础版我们讲解部分新特性，到了就业班还会继续讲解其他新特性。

## 1.1 HTML5新增的语义化标签

以前布局，我们基本用div来做。div对于搜索引擎来说，是没有语义的。

    <div class="header"></div>
    <div class="nav"></div>
    <div class="content"></div>
    <div class="footer"></div>

* \<header>：头部标签
* \<nav>：导航标签
* \<article>：内容标签
* \<section>：定义文档某个区域
* \<aside>：侧边栏标签
* \<footer>：尾部标签

**注意：**

* 这种语义化标准主要是针对搜索引擎的
* 这些新标签页面中可以使用多次
* 在IE9中，需要把这些元素转换为块级元素
* 其实，我们移动端更喜欢使用这些标签

## 1.2 HTML5新增的多媒体标签

新增的多媒体标签主要包含两个：

1. 音频：\<audio>
2. 视频：\<video>

使用它们可以很方便的在页面中嵌入音频和视频，而不再使用flash和其他浏览器插件。

### 1.2.1视频\<video>

当前\<video>元素支持三种视频格式：尽量使用mp4格式

|浏览器|MP4|WebM|Ogg|
|:-:|:-:|:-:|:----:|
|Internet Explorer|YES|NO|NO|
|Chrome|YES|YES|YES|
|Firefox|YES 从Firefox21版本开始 linux系统从Firefox30开始|YES|YES|
|Safari|YES|NO|NO|
|Opera|YES 从Opera25版本开始|YES|YES|

**语法：**

    <video src="文件地址" controls="controls"></video>

**常见属性：**

|属性|值|描述|
|:-:|:-:|:-:|
|autoplay|autoplay|视频就绪自动播放（谷歌浏览器需要添加muted来解决自动播放问题）|
|controls|controls|向用户显示播放控件|
|width|pixels(像素)|设置播放器宽度|
|height|pixels(像素)|设置播放器高度|
|loop|loop|播放完是否继续播放该视频，循环播放|
|preload|auto(预先加载视频) none(不应加载视频)|规定是否预加载视频（如果有了autoplay 就忽略该属性）|
|src|url|视频url地址|
|poster|Imgurl|加载等待的画面图片|
|muted|muted|静音播放|

### 1.2.2音频

当前\<audio>元素支持三种音频格式：

|浏览器|MP3|Wav|Ogg|
|:-:|:-:|:-:|:---:|
|Internet Explore|YES|NO|NO|
|Chrome|YES|YES|YES|
|Firefox|YES|YES|YES|
|Safari|YES|YES|NO|
|Opera|YES|YES|YES|

**语法：**

    <auto src="文件地址" controls="controls"></audio>

**常见属性：**

|属性|值|描述|
|:-:|:-:|:-:|
|autoplay|autoplay|如果出现该属性，则音频在就绪后马上播放|
|controls|controls|如果出现该属性，则向用户显示控件，比如播放按钮。|
|loop|loop|如果出现该属性，则每当音频结束后时重新开始播放。|
|src|url|要播放的音频的URL|

* 谷歌浏览器把音频和视频自动播放禁止了

### 1.2.3 多媒体标签总结

* 音频标签和视频标签使用方式基本一致
* 浏览器支持情况不同
* 谷歌浏览器把音频和视频的自动播放禁止了
* 我们可以给视频标签添加muted属性来静音播放视频，音频不可以（可以通过JavaScript解决）
* 视频标签是重点，我们经常设置自动播放，不实用controls控件，循环和设置大小属性

## 1.3 HTML5 新增的 input 类型

|属性值|说明|
|:-:|:----:|
|type:"email"|限制用户输入必须为Email类型|
|type:"url"|限制用户输入必须是URL类型|
|type:"date"|限制用户输入必须为日期类型|
|type:"time"|限制用户输入必须为时间类型|
|type:"month"|限制用户输入必须为月类型|
|type:"week"|限制用户输入必须为周类型|
|type:"number"|限制用户输入必须为数字类型|
|type:"tel"|手机号码|
|type:"search"|搜索框|
|type:"color"|生成一个颜色选择表单|

## 1.4 HTML5新增的表单属性

|属性|值|说明|
|:-:|:-:|:-:|
|required|required|表单拥有该属性表示其内容不能为空，必填|
|placeholder|提示文本|表单的提示信息，存在默认值将不再显示|
|autofocus|autofocus|自动聚焦属性，页面加载完成自动聚焦到指定表单|
|autocomplete|off/on|当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。 默认已经打开，如 autocomplete="on"，关闭autocomplete="off"需要放在表单内，同时加上name属性，同时成功提交|
|multiple|multiple|可以多选文件提交|

**可以通过以下设置方式修改placeholder里面的字体颜色：**

    input::placeholder{
        color: pink;
    }