# 4.flex布局子项常见属性

* flex子项目占的份数
* align-self 控制子项自己在侧轴的排列方式
* order 属性定义子项的排列顺序（前后顺序）

## 4.1 flex属性

flex 属性定义子项目分配剩余空间，用flex来表示占多少份数。

    .item{
        flex:<number>;/* default 0 */
    }

## 4.2 align-self 控制子项自己在侧轴上的排列方式

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

    span:nth-child(2){
        /* 设置自己在侧轴上的排列方式 */
        align-self:flex-end;
    }

## 4.3 order 属性定义项目的排列顺序

数值越小，排列越靠前，默认为0.

注意：和z-index不一样