# 3.flex布局父项常见属性

## 3.1 常见父项属性

以下由6个属性是对父元素设置的

* flex-direction: 设置主轴的方向
* justify-content: 设置主轴的子元素排列方式
* flex-wrap: 设置子元素是否换行
* align-content: 设置测轴上的子元素的排列方式（多行）
* align-items: 设置测轴上的子元素排列方式（当行）
* flex-flow: 复合属性，相当于同时设置了flex-direction和flex-wrap

## 3.2 flex-direction 设置主轴的方向

### 1.主轴与测轴

在flex布局中，是分为主轴和测轴两个方向，同样的叫法有：行和列、x轴和y轴

* 默认主轴方向就是x轴方向，水平向右
* 默认测轴方向就是y轴方向，水平向下

### 2.属性值

flex-direction属性决定主轴的方向（即项目的排列方向）

注意：主轴和测轴是会变换的，就看flex-direction设置谁为主轴，剩下的就是侧轴。而我们的子元素是跟着主轴来排列的

|属性值|说明|
|:-:|:---:|
|row|默认值从左到右|
|row-reverse|从右到左|
|column|从上到下|
|column-reverse|从下到上|

## 3.3 justify-content 设置主轴上的子元素排列方式

justify-content属性定义了项目在主轴上的对齐方式

**注意：使用这个属性之前一定要确定好主轴是哪个**

|属性值|说明|
|:-:|:-:|
|flex-start|默认值 从头部开始 如果主轴是x轴，则从左到右|
|flex-end|从尾部开始排列|
|center|在主轴居中对齐（如果主轴是x轴则水平居中）|
|space-around|平分剩余空间|
|space-between|先两边贴边 在平分剩余空间（重要）|

## 3.4 flex-wrap 设置子元素是否换行

默认情况下，项目都排在一条线（又称“轴线”）上。flex-wrap属性定义，flex布局中默认是不换行的。

|默认值|说明|
|:-:|:---:|
|nowrap|默认值，不换行|
|wrap|换行|

## 3.5 align-items 设置侧轴上的子元素排列方式（单行）

该属性是控制子项在侧轴（默认是y轴）上的排列方式 在子项为单项的时候使用

|属性值|说明|
|flex-start|从上到下|
|flex-end|从下到上|
|center|挤在一起居中（垂直居中）|
|stretch|拉伸（默认值）|

## 3.6 align-content 设置侧轴上的子元素的排列方式（多行）

设置子项在侧轴上的排列方式 并且只能用于子项出现 换行 的情况（多行），在单行下是没有效果的。

|属性值|说明|
|:-:|:---:|
|flex-start|默认值在侧轴的头部开始排列|
|flex-end|在侧轴的尾部开始排列|
|center|在侧轴中间显示|
|space-around|子项在侧轴平分剩余的空间|
|space-between|子项在侧轴先分布在两头，再平分剩余空间|
|stretch|设置子项元素高度平分父元素高度|

### align-content 和 align-items 区别

* align-items 适用于单行情况下，只有上对齐、下对齐、居中和拉伸
* align-content 适用于换行（多行）的情况下（单行情况下无效），可以设置上对齐、下对齐、居中、拉伸以及平均分配剩余空间等属性值
* 总结就是单行找align-items多行找align-content

## 3.7 flex-flow

flex-flow 属性是 flex-firection 和 flex-wrap 属性的复合属性

    flex-flow: row wrap;

* flex-firection: 设置主轴的方向
* justify-content: 设置主轴上的子元素排列方式
* flex-wrap: 设置子元素是否换行
* align-content: 设置侧轴上的子元素的排列方式（多行）
* align-items: 设置侧轴上的子元素排列方式（单行）
* flex-flow: 复合属性，相当于同时设置了 flex-direction 和 flex-wrap