#include<iostream>

using namespace std;

class Animal //基类
{ 
public: void say(){
    cout<<"..."<<endl;
    };
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
int main(){

    Animal myAnimal;
    Cat myCat; 
    Tiger myTiger; 
    myAnimal.say(); 
    myCat.say();
    myTiger.say();
    speek(&myAnimal);
    speek(&myCat);
    speek(&myTiger);

    return 0;
}
