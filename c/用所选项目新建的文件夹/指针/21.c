#include<stdio.h>

int main(void)
{
    int num = 520;
    const int cnum = 880;
    const int *pc = &cnum;

    printf("cnum = %d, &cnum = %p\n ", cnum, &cnum);
    printf("*pc = %d, pc : %p\n", *pc, pc);

    //*pc = 1000;   c语言中 是不是可以用解引用的方法修改指针所指向的数据

    pc = &num;//可以用 指针指向不同的变量和常量；

    printf("num = %d, &num = %p\n", num, &num);
    printf("*pc = %d, pc : %p\n", *pc, pc);
    
    num = 1090;//

    printf("num = %d, &num : %p\n", num, &num);
    printf("*pc = %d, pc : %p\n", *pc, pc);
    
    return 0;
}