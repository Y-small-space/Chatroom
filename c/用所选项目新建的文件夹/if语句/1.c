#include<stdio.h>
int main (void)
{
    int i;

    printf("你的年龄是：");
    scanf("%d",&i);

    if (i<=18)
    {
         printf("进门左拐");

    }
    else
    {
        printf(
            "欢迎光临"
        );
    }

    return 0;
    
    
}