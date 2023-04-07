#include<stdio.h>

int main(void)
{
    int num = 520;
    const int cnum = 1000;
    int *const pc = &num;

    *pc = 1200;
    printf("*p = %d\n", *pc);

    //pc = &cnum;   
    //printf("*pc = %d\n", pc);
    
    return 0;
}