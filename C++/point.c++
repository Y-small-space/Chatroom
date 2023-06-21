#include<iostream>

using namespace std;

class point{
private:
    int site_x,site_y;
public:
    void input(int x = 1,int y = 1);
    void output();
};

void point :: input(int x,int site_y){
    site_x = x;
    site_y = site_y;
}
void point :: output(){
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