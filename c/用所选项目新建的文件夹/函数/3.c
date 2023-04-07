#include<stdio.h>

int sum (int n);
int sum (int n)
{
    int result = 0;

    do
    {
        result += n;
    } while (n -- > 0);

    return result;
}

int main()
{
    int result, n;

    printf("请输入一个数值：");
    scanf("%d", &n);

    result = sum(n);

    printf("1+2+3+4+....+n的值为：%d\n", result);

    return 0;
}