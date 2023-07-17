"use strict";
(function () {
    // 定义一个Animal类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("动物在叫～");
        }
    }
    // 定义一个表示狗的类
    // 使Dog继承Animal类
    /**
     * Dog extends Animal
     *  - 此时，Animal 被称为父类，Dog 被称为子类
     *  - 使用继承后，子类将会拥有父类所有的方法和属性
     */
    class Dog extends Animal {
    }
})();
