(function(){
    // 定义一个表示人的类
    class Person{
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    const per = new Person('sunwukong', 18);

    /**
     *  现在属性是在对象中设置的，属性可以任意的被修改
     */

    per.name = '猪八戒'
    per.age = 3
})();
