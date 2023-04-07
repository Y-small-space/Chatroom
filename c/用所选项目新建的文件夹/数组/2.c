#include<stdio.h>
int main(void)
{
    int a[10] = {1,2,3,4,};
    int i = 0;

    for ( i = 0; i < 10; i++)
    {
        printf("%d\n",a[i]);
    }
    printf("%d",sizeof(a));
    
    return 0;
}