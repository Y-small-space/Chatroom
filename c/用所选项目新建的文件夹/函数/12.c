//将函数指针作为参数；
#include<stdio.h>
int add(int, int);
int sub(int, int);
int calc(int (*fp)(int, int), int, int);

int add(int num1, int num2)
{
        return num1 + num2;
}
int sub(int num1, int num2)
{
        return num1 - num2;
}
int calc(int (*fp)(int , int), int num1, int num2)
{
        return (*fp) (num1, num2);
}

int main(void)
{
    printf("3 + 5 = %d\n", calc(add, 3, 5));
    printf("3 - 5 = %d\n", calc(sub, 3, 5));

    return 0;
}