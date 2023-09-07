# 3.CSS三角

网页中常见一些三角形，使用CSS直接画出来就可以，不必做成图片或者字体图标。

一张图，你就知道CSS三角形怎么来的了，做法如下：

    div{
        width:0;
        height:0;
        line-height:0;
        font-size:0;
        border:50px solid transparent;
        border-left-color:pink;
        
    }