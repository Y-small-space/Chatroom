(function () {
    
    /**
     *  以abstract开头的类是抽象类
     *      抽象类和其他类区别不大，只是不能用来创建对象
     *      抽象类就是专门用来继承的类
     * 
     *  抽象类中可以添加抽象方法
     * 
     */
    abstract class Animal{
        name: string;

        constructor(name: string){
            this.name = name;
        }

        // 定义一个抽象方法
        // 抽象方法使用 abstract 开头， 没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello(): void
    }

    class Dog extends Animal {
        age: number;

        constructor(name:string ,age:number){
            // 如果在子类中写了构造函数，在子类中必须对父类的构造函数进行调用 
            super(name);
            this.age = age;
        }

        sayHello(): void {
            // 在类中，super就是当前类的父类
            //  super.sayHello();
        }
    }

    class Cat extends Animal{
        sayHello(): void {
            console.log('maiomaiomaio~'); 
        }
    }

    const dog = new Dog('gougou',3);
 
    dog.sayHello();
})() 