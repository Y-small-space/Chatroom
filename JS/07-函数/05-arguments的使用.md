# 5.arguments的使用

当我们不确定有多少个参数传递的时候，可以用**arguments**来获取。在Javascript中，arguments 实际上它是当前函数的一个**内置对象**。所有函数都内置了一个arguments 对象，**arguments对象中存储了传递的所有实参。**

**arguments展示形式是一个伪数组，**因此可以进行遍历。份数组具有以下特点：

* 具有 length 属性
* 按索引方式储存数据
* 不具有数组的push，pop等方法