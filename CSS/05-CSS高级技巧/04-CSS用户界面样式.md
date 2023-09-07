# 4.CSS用户界面样式

## 4.1 什么是界面样式

所谓的界面样式，就是更改一些用户操作样式，以便提高更好的用户体验。

* 更改用户的鼠标样式
* 表单轮廓
* 防止表单域拖拽

## 4.2 鼠标样式cursor

    li{cursor:pointer;}

设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。

|属性值|描述|
|:-:|:---:|
|default|小白 默认|
|pointer|小手|
|move|移动|
|text|文本|
|not-allowed|禁止|

## 4.3 轮廓线 outline

给表单添加outline：0；或者outline：none样式之后，就可以去掉默认的蓝色边框。

    input{outline: none;}

## 4.4 防止拖拽文本域 resize

实际开发中，我们文本域右下角是不可以拖拽的。

    textarea{resize:none;}

