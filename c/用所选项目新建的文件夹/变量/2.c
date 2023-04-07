#include<stdio.h>

int a,b = 10;

void func();

void func()
{
    int b;

    a = 880;
    b = 120;

    printf("In func, a = %d, b = %d\n", a, b);

}

int main(void)
{
    printf("In main, a = %d, b = %d\n", a, b);
    func();
    printf("In main, a = %d, b = %d\n", a, b);

    return 0;
}