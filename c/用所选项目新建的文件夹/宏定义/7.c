#include<stdio.h>

#define TOGETHER(x, y) x ## y 

int main(void)
{
    printf("%d\n", TOGETHER(5, 20));

    return 0;
}