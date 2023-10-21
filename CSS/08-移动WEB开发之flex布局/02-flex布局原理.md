# 2.flex布局原理

## 2.1 布局原理

flex是flexible box的缩写，意为：“弹性布局”，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为flex布局。

* 当我们为父盒子设为flex布局以后，子元素的float、clear和vertical-align属性将失效。
* 伸缩布局 = 弹性布局 = 伸缩盒布局 = flex布局

采用Flex布局的元素，成为Flex容器（flex container），简称“容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称“项目”。

* 体验中div就是flex父容器。
* 体验中span就是自容器flex项目
* 子容器可以横向排列也可以纵向排列

**总结flex布局原理**：

**就是通过给父盒子添加flex属性，来控制子盒子的位置和排列方式。**

