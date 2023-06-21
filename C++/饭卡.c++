#include <iostream>

using namespace std;

class Card {
private:
    int cardNumber;
    float balance;

public:
    void input(int x, float y) {
        cardNumber = x;
        balance = y;
    }

    void addmoney(float x) {
        balance += x;
        cout << "成功充值：" << x << "元\n";
    }

    void consume(float x) {
        if (x <= balance) {
            balance -= x;
            cout << "刷卡消费：" << x << "元\n";
        } else {
            cout << "余额不足，刷卡失败\n";
        }
    }

    void Balance() {
        cout << "卡号：" << cardNumber << endl;
        cout << "余额：" << balance << "元\n";
    }
};

int main() {

    Card card;
    card.input(123456789,100.0);

    card.addmoney(200.5);
    card.Balance();

    card.consume(111.4);
    card.Balance();

    return 0;
}
