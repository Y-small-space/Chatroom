#include<iostream>

using namespace std;

class Line{

public:
    Line(Point xp1,Point xp2);
    Line(Line&)
    double Getlen(){return len;}
private:
    Point p1,p2;
    double len;
}

Line::Line(Point xp1,Point xp2):p1(xp1),p2(xp2){
    cout<<"line构造函数被调用"<<endl;
    double x = double(p1.GetX()-p2.GetX());
    double y = double(p1.GetY()-p2.GetY());
    len = sqrt(x*x+y*y);
}

Line::Line(Line &l):p1(1,p1),p2(1,p2){
    cout<<"calling the copy constructure of line"<<endl;
    len = l.len;
}

class Point : public Line{
private:
    int site_x,site_y;
public:
    void input(int x = 1,int y = 1);
    void output();
};

void Point :: input(int x,int site_y){
    site_x = x;
    site_y = site_y;
}
void Point :: output(){
    cout<<"x的坐标是 ："<<site_x<<endl;
    cout<<"y的坐标是："<<site_y<<endl;
}

int main(){

    point st1;
    st1.output();
    st1.input(1,2);
    st1.output();

    return 0;
}