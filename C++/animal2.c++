#include<iostream>

using namespace std;

class Animal //基类
{ 
public: 
    virtual void say() = 0;
};

 class Cat: public Animal
{ 
public:void say(){
    cout<<"miao miao"<<endl;
    }; 
};

class Tiger: public Cat
{
public: void say(){ 
    cout<<"a~wu a~wu"<<endl;
    };
};

void speek(Animal *ptr){
    ptr->say();
}

void Animal :: say(){ //外部接口
        cout<<"..."<<endl;
};

int main(){

    //Animal myAnimal; 抽象类不能实例化，不能创建对象
    Cat myCat; 
    Tiger myTiger; 
    //myAnimal.say(); 
    myCat.say();
    myTiger.say();
    //speek(&myAnimal);
    speek(&myCat);
    speek(&myTiger);

    return 0;
}