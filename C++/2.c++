#include<iostream>

using namespace std;

class Student {
private:
    int num;
    float score;
public:
    void output();
    void set(int n=0, float s=0.0);
};

void Student :: output(){
        cout << "num: " << num << endl;
        cout << "score: " << score << endl;
}
void Student :: set(int n, float s){
        num = n;
        score = s;
}

int main() {
    Student stu1;
    
    stu1.output();
    stu1.set(1, 90);
    stu1.output();

    return 0;
}
