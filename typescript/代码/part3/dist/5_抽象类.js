"use strict";
(function () {
    /**
     *  以abstract开头的类是抽象类
     *      抽象类和其他类区别不大，只是不能用来创建对象
     *      抽象类就是专门用来继承的类
     *
     *  抽象类中可以添加抽象方法
     *
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 如果在子类中写了构造函数，在子类中必须对父类的构造函数进行调用 
            super(name);
            this.age = age;
        }
        sayHello() {
            // 在类中，super就是当前类的父类
            //  super.sayHello();
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('maiomaiomaio~');
        }
    }
    const dog = new Dog('gougou', 3);
    dog.sayHello();
})();
