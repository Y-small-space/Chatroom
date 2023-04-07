#include<stdio.h>

int *func(void)
{

        int *ptr;
        
        *ptr = 520;

        return ptr;
}

int main(void)
{

        int *ptr;
        ptr = func();

        printf("%d\n", *ptr);
        
        return 0;
}