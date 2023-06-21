#include <iostream>

using namespace std;

class SwimmingPool {
private:
    float length;
    float width;

public:
    SwimmingPool(float l, float w) {
        length = l;
        width = w;
    }

    float Cost1() {
        float m = 2 * (length + width);
        float Cost = m * 35;
        return Cost;
    }

    float Cost2() {
        float pathwayLength = length + 2 * 3;
        float pathwayWidth = width + 2 * 3;
        float Area = (pathwayLength * pathwayWidth)-(length * width);
        float Cost = Area * 20;
        return Cost;
    }
};

int main() {
    float poolLength, poolWidth;
    cout << "请输入游泳池的长度（米）：";
    cin >> poolLength;
    cout << "请输入游泳池的宽度（米）：";
    cin >> poolWidth;

    SwimmingPool pool(poolLength,poolWidth);

    float fenceCost = pool.Cost1();
    float pathwayCost = pool.Cost2();

    cout << "栅栏的造价为：" << fenceCost << "元" << endl;
    cout << "过道的造价为：" << pathwayCost << "元" << endl;

    return 0;
}
