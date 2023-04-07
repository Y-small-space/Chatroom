#include<stdio.h>
int main(void)
{
    int a[10] = {[3] = 3,[4] = 4,[8] = 8};
    int i = 0;

    for ( i = 0; i < 10; i++)
    {
        printf("%d\n",a[i]);
    }
    
    return 0;

}