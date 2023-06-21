#include <iostream>
#include <cmath>

using namespace std;

class Point {
private:
    int site_x, site_y;

public:
    Point(int x = 0, int y = 0) : site_x(x), site_y(y) {}
    void input(int x = 1, int y = 1);
    void output();
    int GetX() const { return site_x; }
    int GetY() const { return site_y; }
};

class Line {
public:
    Line(Point xp1, Point xp2);
    Line(const Line&);
    double GetLen() { return len; }

private:
    Point p1, p2;
    double len;
};

Line::Line(Point xp1, Point xp2) : p1(xp1), p2(xp2) {
    cout << "Line构造函数被调用" << endl;
    double x = double(p1.GetX() - p2.GetX());
    double y = double(p1.GetY() - p2.GetY());
    len = sqrt(x * x + y * y);
}

Line::Line(const Line& l) : p1(l.p1), p2(l.p2) {
    cout << "调用了Line的拷贝构造函数" << endl;
    len = l.len;
}

void Point::input(int x, int y) {
    site_x = x;
    site_y = y;
}

void Point::output() {
    cout << "x的坐标是：" << site_x << endl;
    cout << "y的坐标是：" << site_y << endl;
}

int main() {
    Point mpy1(1, 1), mpy2(3, 4);
    Line line(mpy1, mpy2);
    Line line2(line);

    double length = line.GetLen();
    double length2 = line2.GetLen();

    cout << "线段1长度是：" << length << endl;
    cout << "线段2长度是：" << length2 << endl;

    return 0;
}
