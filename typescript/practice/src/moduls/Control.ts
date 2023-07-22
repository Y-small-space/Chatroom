// 引入其他的类
import Score_panel from './Score_panel';
import Food from './Food';
import Snake from './Snake';

// 游戏控制器，控制其他所有的类
class Control {
    // 定义三个属性
    // 蛇
    snake: Snake;
    // 食物
    food: Food;
    // 积分牌
    scorepanel: Score_panel;
    // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction: string = 'Right';
    // 创建一个属性用来记录游戏是否结束
    isLive: boolean = false;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorepanel = new Score_panel();

        this.init();
    }

    // 游戏的初始化方法，调用后游戏即开始
    init() {
        // 绑定键盘按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        // 调用run方法，使蛇移动
        this.run();
    }

    // 创建一个键盘响应函数
    keydownHandler(e: KeyboardEvent) {
        // 需要检查event.key的值是否合法（用户是否按了正确的按键）
        // 修改direction属性
        this.direction = e.key;
    }

    // 创建一个控制蛇移动的方法
    run() {
        /**
         *  根据方向（this.direction）来使蛇的位置改变
         *      向上 top 减少
         *      向下 top 增加
         *      向左 left 减少
         *      向右 left 增加
         */
        //  获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据按键方向调整X和Y的值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动Y减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向上移动Y减少
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动X减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动X减少
                X += 10;
                break;
        }

        // 修改蛇的X和Y值
        this.snake.X = X;
        this.snake.Y = Y;

        // 开启一个定时器
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorepanel.level - 1) * 30);
    }
}

export default Control;
