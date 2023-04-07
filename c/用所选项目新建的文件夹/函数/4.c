#include<stdio.h>

int max (int , int);
int max (int x, int y)
{
    if (x > y)
        return x;
    else
        return y;
}

int main(void)
{
    int a, b, c;

    printf("请输入两个不相同的值：");
    scanf("%d%d", &a, &b);

    c = max( a, b);
    
    printf("它们中较大的值是：%d \n", c);

    return 0;
}