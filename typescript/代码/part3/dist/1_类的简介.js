"use strict";
// 使用 class 关键字来定义一个类
/**
 *  对象中主要包括了两个部分：
 *      属性
 *      方法
 */
class Person {
    constructor() {
        /**
         * 直接定义的属性是实例属性，需要通过对象的实例去访问：
         *      const per = new Person
         */
        // 定义实例属性
        this.name = "sunwukong"; //readonly 只读属性，不可以被修改
    }
    // 定义方法
    sayHello() {
        console.log("hello!");
    }
    static sayHello1() {
        console.log("hello!");
    }
}
// 在属性之前使用static关键字可以定义类属性（静态属性），可以通过类直接去访问 
Person.age = 18;
const person = new Person();
// console.log(person.name, person.age); 
console.log(Person.age);
