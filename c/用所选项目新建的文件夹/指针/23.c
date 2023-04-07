#include<stdio.h>

int main(void)
{
    int num = 520;
    const int cnum = 1000;
    //const int *const pc = &cnum;//此处常量的值不可以改变，常量的地址也不可以改变。
    const int *const pc = &num;
 /* *pc = 1200;
    printf("*p = %d\n", *pc);

    pc = &cnum;   
    printf("*pc = %d\n", pc);
*/
    num = 1002;
    printf("*pc : %d", *pc);

    
    return 0;
}