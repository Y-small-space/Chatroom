#include <iostream>

using namespace std;

class Point {
private:
    static int count; // 静态成员变量，用于记录实例数量
    int site_x, site_y;

public:
    Point(int x = 0, int y = 0) : site_x(x), site_y(y) {
        count++; // 每次创建实例时，实例数量加一
    }
    ~Point() {
        count--; // 每次销毁实例时，实例数量减一
    }
    void input(int x = 1, int y = 1);
    void output();
    static int getCount() { return count; } // 静态成员函数，返回实例数量
};

int Point::count = 0; // 静态成员变量初始化

void Point::input(int x, int y) {
    site_x = x;
    site_y = y;
}

void Point::output() {
    cout << "x的坐标是：" << site_x << endl;
    cout << "y的坐标是：" << site_y << endl;
}

int main() {
    Point st1;
    cout << "实例数量：" << Point::getCount() << endl;

    st1.output();
    st1.input(1, 2);
    st1.output();

    Point st2(3, 4);
    cout << "实例数量：" << Point::getCount() << endl;

    Point st3(5, 6);
    cout << "实例数量：" << Point::getCount() << endl;

    return 0;
}

