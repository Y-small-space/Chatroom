#include<iostream>

using namespace std;

// 继承方式

// 公共继承
class Base1
{
public:
    int m_A;
protected:
    int m_B;
private:
    int m_C;
};
class Son1 : public Base1
{
public:
    void(){
        m_A = 10; // 父类中的公共权限成员 到子类中依然是公共权限
        m_B = 10; // 父类中的保护权限成员 到子类中依然是保护权限
        // m_C = 10 // 父类中的私有权限成员 子类访问不到
    }
}
void test0(){
    Son1 s1;
    s1.m_A = 100;
    s1.m_B = 100; // 到Son1中 m_B是保护权限 类外访问不到
}

// 保护继承
class Base2
{
public:
    int m_A;
protected:
    int m_B;
private:
    int m_C;
}
class Son2 : protected Base2
{
public:
    void func()
    {
        m_A = 100; // 父类中共有成员，到子类中变为保护权限
        m_B = 100; // 父类中保护权限，到子类中变为保护权限
        // m_C = 100; // 父类中私有成员 子类访问不到
    }
}
void test02()
{
    Son2 s1;
    // s1.m_A = 1000; // 在Son2中 m_A变为保护权限，因此类外访问不到
    // s1.m_B = 1000; // 在Son2中 m_B保护权限 不可以访问
}

// 私有继承
class Base3()
{
public:
    int m_A;
protected:
    int m_B;
private:
    int m_C;
}
class Son3 : private Base3
{
public:
    void func()
    {
        m_A = 100; // 父类中公共成员 到子类中变为 私有成员 
        m_B = 100; // 父类中保护成员 到子类中变为 私有成员
        //m_C = 100; // 父类中私有成员，子类访问不到 
    }
}
void test03()
{
    Son2 s1;
    s1.m_A = 100; // 父类中公共成员 到子类中变为 私有成员
    s1.m_B = 100; // 父类中保护成员 到子类中变为 私有成员
    // m_C = 100; // 父类中私有成员，子类访问不到
}

int main()
{
    
}