# 9.CSS的背景

通过 CSS 背景属性，可以给页面元素添加背景样式。

背景属性可以设置背景颜色、背景图片、背景平铺、背景图片位置、背景图像固定等。

## 9.1 背景颜色

**background-color**属性定义了元素的背景颜色。

    background-color: 颜色值;

一般情况下元素背景颜色默认值是 **transparent**（透明），我们也可以手动指定背景颜色为透明色。

## 9.2 背景图片

**background-image**属性描述了元素的背景图像。实际开发常见于log或者一些装饰性的小图片或者是超大的背景图片，优点是非常便于控制位置（精灵图也是一种运用场景）。

    background-image: none | url (url)

|参数值|作用|
|none|无背景图（默认的）|
|url|使用绝对或相对地址指定背景图像|

## 9.3 背景平铺

如果需要在 HTML 页面上对背景图像进行平铺，可以使用 **background-repeat** 属性。

    background-repeat: repeat | no-repeat | repeat-x | repeat-y

|参数值|作用|
|:-:|:---:|
|repeat|背景图像在纵向和横向上平铺（默认的）|
|no-repeat|背景图像不平铺|
|repeat-x|背景图像在横向上平铺|
|repeat-y|背景图像在纵向平铺|

## 9.4 背景图片位置

利用 **background-position** 属性可以改变图片在背景中的位置，

    background-position: x y;

参数代表的意思是：×坐标和y坐标。可以使用 **方位名词** 或者 **精确单位**。

1. 参数是方位名词:

    * 如果指定的两个值都是方位名词，则两个值前后顺序无关，比如 left top 和 top left 效果一致
    * 如果只指定了一个方位名词，另一个值省路，则第二个值默认居中对齐

2. 参数是精确单位:

    * 如果参数值是精确坐标，那么第一个肯定是x坐标，第二个一定是y坐标
    * 如果只指定一个数值，那该数值一定是x坐标，另一个默认垂直居中

3. 参数是混合单位:

    * 如果指定的两个值是精确单位和方位名词混合使用，则第一个值是x坐标，第二个值是y坐标

## 9.5 背景图像固定（背景附着）

**background-attachment** 属性设置背景图像是否固定或者随着页面的其余部分滚动。

background-attachment 后期可以制作视差滚动的效果。

    background-attachment: scroll | fixed

|参数|作用|
|:-:|:-:|
|scroll|背景图像是随对象内容滚动|
|fixed|背景图像固定|

## 9.6 背景复合写法

为了简化背景属性的代码，我们可以将这些属性合并简写在同一个属性 **background** 中。从而节约代码量。

当使用简写属性时，没有特定的书写顺序,一般习惯约定顺序为：

**background: 背景颜色 背景图片地址背景平铺 背景图像滚动背景图片位置;**

    background: transparent url(image.jpg) repeat-y fixed top;

这是实际开发中，我们更提倡的写法。

## 9.7 背景色半透明

CSS3 为我们提供了背景颜色半透明的效果。

    background: rgba(0, 0, 0, 0.3);

* 最后一个参数是 alpha透明度，取值范周在0~1之间
* 我们习惯把 0.3 的 0 省略掉，写为 background:rgba(0,0,0,.3);
* 注意：背景半透明是指盒子背景半透明，盒子里面的内容不受影响
* CSS3 新增属性，是IE9+版本浏览器才支持的
* 但是现在实际开发,我们不太关注兼容性写法了,可以放心使用

## 9.8 背景总结

|属性|作用|值|
|:-:|:-:|:-:|
|background-color|背景颜色|预定义的颜色值/十六进制/RGB代码|
|background-image|背景图片|url(图片路径)|
|background-repeat|是否平铺|repeat/no-repeat/repeat-x/repeat-y|
|background-position|背景位置|length/position分别是 x 和 y 坐标|
|background-attachment|背景附着|scroll（背景滚动）/fixed（背景固定）|
|背景简写|书写更简单|背景颜色 背景图片地址 背景平铺 背景滚动 背景位置;|
|背景色半透明|背景颜色半透明|background: rgba(0,0,0,0.3);后面必须是4个值|

背景图片;：实际开发常见于 logo 或者一些装饰性的小图片或者是超大的背景图片,优点是非常便于控制位置。（精灵图也是一种运用场景）