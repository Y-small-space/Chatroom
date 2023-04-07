#include<stdio.h>
int main(void)
{
    int a,b;
    printf("please input two number:");
    scanf("%d %d",&a,&b);


    if (a!=b)
    {
        if (a>b)
        {
            printf("a>b");
        }
        else
        {
            printf("a<b");
        }
    }
    else
    {
        printf("a=b");
    }
    
    return 0;

}