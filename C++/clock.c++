#include<iostream>

using namespace std;

class Clock{
private:
    int Hour,Minute,Second;
public:
    void SetTime(int Hour,int Minute, int Second);
    void ShowTime();
};

void Clock :: SetTime(int NewH,int NewM,int NewS){
    Hour=NewH;
    Minute=NewM;
    Second=NewS;
}

void Clock :: ShowTime(){
    cout<<Hour<<":"<<Minute<<":"<<Second<<endl;
}

class Clock_A:public Clock
{
private:
    int Hour,Minute,Second;
public:
    void A_SetTime(int Hour,int Minute, int Second);
    void A_ShowTime();
};

void Clock_A :: A_SetTime(int NewH,int NewM,int NewS){
    Hour=NewH;
    Minute=NewM;
    Second=NewS;
}

void Clock_A :: A_ShowTime(){
    cout<<Hour<<":"<<Minute<<":"<<Second;
}  


int main(){
    Clock_A B;
    int h,m,c,h1,m2,c2;
    cout<<"请输入时：分：秒";
    cin>>h;
    cin>>m;
    cin>>c;
    cout<<"请输入闹钟时间：";
    cin>>h1;
    cin>>m2;
    cin>>c2;
    B.SetTime(h,m,c);
    cout<<"当前时间：";
    B.ShowTime();
    B.A_SetTime(h1,m2,c2);
    cout<<"重置时间：";
    B.A_ShowTime(); 

    return 0;
}