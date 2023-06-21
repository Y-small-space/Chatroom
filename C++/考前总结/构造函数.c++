#include<iostream>

using namespace std;

// 1.构造函数的分类以及调用
// 分类
// 按参数分类 无参构造（默认构造）和 有参构造
// 按类型分类 普通构造 拷贝构造函数
class Person
{
private:

public:
    // 构造函数
    Person();
    // 析构函数
    ~Person();
};

Person::Person()
{
    cout << "Person的构造函数无参调用" << endl;
}
Person::Person(int a)
{
    cout << "Person的构造函数有参调用" << endl;
}
Person::Person(const Person &p)
{
    cout << "Person的构造函数有参调用" << endl;
}

Person::~Person()
{
    cout << "Person的析构函数调用" << endl;
}

void test0()
{
    //1. 括号法
    Person p1;// 默认构造函数
    Person p2(10 );// 有参构造函数
    Person p3(p2);
     
    //2. 显示法
    //3. 隐式转换法
}


int main(){

}