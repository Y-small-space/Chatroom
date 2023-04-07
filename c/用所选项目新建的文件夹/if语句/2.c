#include<stdio.h>
int main(void)
{
    int i;
    printf("请输入您的分数：");
    scanf("%d",&i);
    if (i>=90)
    {
        printf("A");
    }
    else if (80<=i)
    {
        printf("B");
    }
    else if (70<=i)
    {
        printf("C");
    }
    else if (60<=i)
    {
        printf("D");
    }
    else
    {
        printf("E");
    }   
    
}