// 引入样式
import './style/index.less';

// 定义食物类Food
class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor() {
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!;
    }

    // 定义一个获取食物x轴坐标的方法
    get X() {
        return this.element.offsetLeft
    }

    get Y() {
        return this.element.offsetTop
    }

    // 修改食物的位置
    change() {
        // 生成一个随机的位置
        // 食物的位置最小是0，最大是290
        // 蛇移动一次就是一格，一格大小就是10，所以就要求食物的坐标必须是整10

        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

/*
    测试代码：
    const food = new Food();
    food.change();
    console.log(food.X, food.Y);
*/

// 定义表示计分牌的类
class Score_panel{
    // score和level用来记录分数和等级
    score = 0;
    level = 1; 

    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreElt : Element;
    levelElt : Element;

    constructor(){
        this.scoreElt = document.getElementById('score')!;
        this.levelElt = document.getElementById('level')!;
    }

    // 设置一个加分的方法
    addScore(){
        // 使分数自增
        this.scoreElt.innerHTML = ++this.score + '';
    }

    // 提升等级的方法
    levelUp(){
        if(this.level<10){
            this.levelElt.innerHTML = ++this.level + '';
        }
    }
}