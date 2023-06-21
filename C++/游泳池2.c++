#include <iostream>
using namespace std;

// 抽象类 Shape
class Shape {
public:
    virtual float Perimeter() = 0;
    virtual float Area() = 0;
};

// 圆类 Circle
class Circle : public Shape {
private:
    float radius;

public:
    Circle(float r) : radius(r) {}

    float Perimeter(){
        return 2 * 3.14 * radius;
    }

    float Area(){
        return 3.14 * radius * radius;
    }
};

// 矩形类 Rectangle
class Rectangle : public Shape {
private:
    float length;
    float width;

public:
    Rectangle(float l, float w) : length(l), width(w) {}

    float Perimeter(){
        return 2 * (length + width);
    }

    float Area(){
        return length * width;
    }
};

// 正方形类 Square
class Square : public Shape {
private:
    float side;

public:
    Square(float s) : side(s) {}

    float Perimeter(){
        return 4 * side;
    }

    float Area(){
        return side * side;
    }
};

// 三角形类 Triangle
class Triangle : public Shape {
private:
    float a;
    float b;
    float c;

public:
    Triangle(float A, float B, float C) : a(A), b(B), c(C) {}

    float Perimeter(){
        return a + b + c;
    }

    float Area(){
        float s = (a + b + c) / 2;
        return sqrt(s * (s - a) * (s - b) * (s - c));
    }
};


