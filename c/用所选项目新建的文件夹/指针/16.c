#include<stdio.h>

int main()
{
    int *p1;//*p1 就是野指针
    int *p2 = NULL;

    printf("%d\n", *p1);
    printf("%d\n", *p2);

    return 0;
}