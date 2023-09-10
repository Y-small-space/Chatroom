# 6.3D转换

我们生活的环境是3D的，照片就是3D物体在2D平面呈现的例子。

**有什么特点？**

* 近大远小。
* 物体后面遮挡不可见

当我们在网页上构建3D效果的生活参考这些特点就能产生出3D效果。

## 6.1 三位坐标系

三维坐标系其实就是指立体空间，立体空间是由3个轴共同组成的。

* x轴：水平向右 注意：x右边是正值，左边是负值
* y轴：垂直向下 注意：y下面是正值，上面是负值
* z轴：垂直屏幕 注意：往外面是正值，往里面是负值

## 6.2 3D移动translate3d

3D移动在2D移动的基础上多加了一个可以移动的方向，就是z轴方向。

* translform:translateX(100px):仅仅是在x轴上移动
* translform:translateY(100px):仅仅是在y轴上移动
* translform:translateZ(100px):仅仅是在z轴上移动（注意：translateZ一般用px单位）
* translform:translate3d(x,y,z):其中x、y、z分别指要移动的轴的方向的距离

## 6.3 透视perspective

在2D平面产生近大远小视觉立体，但是只是效果二维的

* 如果想要在网页上产生3D效果需要透视（理解成3D物体投影在2D平面内）。
* 模拟人类的视觉位置，课认为安排一只眼睛去看。
* 透视我们也称为视距：视距就是人的眼睛到屏幕的距离
* 距离视觉点越近的在电脑平面成像越大，越远成像越小
* 透视的单位是像素

**透视写在被观察元素的父盒子上面的。**

## 6.4 translateZ

transform:translateZ(100px):仅仅是在Z轴上移动。

有了透视，就能看到translateZ引起的变化了。

## 6.5 3D旋转rotate3D

3D旋转指可以让元素在三维平面内沿着x轴，y轴，z轴或者自定义轴进行旋转。

**语法：**

* translform:translateX(45deg):沿着x轴正方向旋转45度
* translform:translateY(45deg):沿着y轴正方向旋转45deg
* translform:translateZ(45deg):沿着z轴正方向旋转45deg
* translform:translate3d(x,y,deg):沿着自定义轴旋转deg为角度

**左手准则：**

* 左手的手拇指指向x轴的正方向
* 其余手指的弯曲方向就是该元素沿着x轴旋转的方向

* 左手的拇指窒息那个y轴的正方向
* 其余手指的弯曲方向就是该元素沿着y轴旋转的方向（正值）

## 6.6 3D呈现transfrom-style

* 控制子元素是否开启三维立体环境。
* transform-style：flat 子元素不开启3d立体空间 默认的
* transform-stylr：preserve-3d 子元素开启立体空间
* 代码写给父级，但是影响的是子盒子

