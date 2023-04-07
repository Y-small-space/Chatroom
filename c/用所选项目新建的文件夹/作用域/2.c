#include<stdio.h>

void func(void);

int main(void)
{
    extern int count;

    func();
    count++;
    printf("In main, count = %d", count);

    return 0;    
}

int count;

void func(void)
{
    count ++;
    printf("In func, count = %d\n", count);
}
