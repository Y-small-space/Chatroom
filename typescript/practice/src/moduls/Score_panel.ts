// 定义表示计分牌的类
class Score_panel {
    // score和level用来记录分数和等级
    score = 0;
    level = 1;

    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreElt: Element;
    levelElt: Element;

    // 设置一个变量限制等级
    maxLevel: number;
    // 设置一个变量表示多少分时升级
    upScore: number;

    constructor(maxLevel: number = 10, upLoader: number = 10) {
        this.scoreElt = document.getElementById('score')!;
        this.levelElt = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upLoader;
    }

    // 设置一个加分的方法
    addScore() {
        // 使分数自增
        this.scoreElt.innerHTML = ++this.score + '';
        // 判断分数是多少
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }
 
    // 提升等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelElt.innerHTML = ++this.level + '';
        }
    }
}

export default Score_panel;