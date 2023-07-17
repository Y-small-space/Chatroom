class Dog{
    name : string;
    age : number;

    // constructor 被称为构造函数
    // 构造函数会在对象创建是调用
    constructor(name:string,age:number){
        // 在实例对象中this就是表示当前新建的那个对象
        // 可以通过this向新建的对象中添加属性 
        this.name = name;
        this.age = age
    }
    
    bark(){
        alert("wolf~")
    }
}

const dog = new Dog('213',123)  
console.log(dog)