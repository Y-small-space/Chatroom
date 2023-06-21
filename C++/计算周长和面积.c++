#include <iostream>

using namespace std;

class Rectangle {
private:
    float length;
    float width;

public:
    Rectangle(float l = 0, float w = 0) {
        length = l;
        width = w;
    }

    float Perimeter() {
        return 2 * (length + width);
    }

    float Area() {
        return length * width;
    }
};

class Square : public Rectangle {
public:
    Square(float s = 0) : Rectangle(s, s) {}
};

int main() {
    Rectangle r(3, 4);
    cout << "长方形周长: " << r.Perimeter() << endl;
    cout << "长方形面积: " << r.Area() << endl;

    Square s(5);
    Rectangle* pr;
    pr = &s;
    cout << "正方形周长: " << pr->Perimeter() << endl;
    cout << "正方形面积: " << pr->Area() << endl;

    return 0;
}
