"use strict";
class Dog {
    // constructor 被称为构造函数
    // 构造函数会在对象创建是调用
    constructor(name, age) {
        // 在实例对象中this就是表示当前新建的那个对象
        this.name = name;
        this.age = age;
    }
    bark() {
        alert("wolf~");
    }
}
const dog = new Dog("123", 123);
console.log(dog);
