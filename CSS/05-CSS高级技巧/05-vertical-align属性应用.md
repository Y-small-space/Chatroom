# 5.vertical-align属性应用

    vertical-align: baseline|top|middle|bottom

## 5.1 图片、表单和文字对齐

图片、表单都属于行内块元素，默认的vertical-align是基线对齐。

此时可以给图片、表单这些行内块元素的vertical-align属性设置为middle就可以让文字和图片垂直居中对齐了。

## 5.2 解决图片底部默认空白缝隙问题

bug：图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。

主要解决方法有两种：

1. 给图片添加vertical-align：middle|top|bottom等。（提倡使用的）
2. 把图片转换为块级元素display：block;