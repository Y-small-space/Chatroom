#include<stdio.h>

void func();

void func()
{
    
    extern count;//extern函数的作用是告诉编译器这个变量的定义在后面。
        
    count++;
}
int count = 0;
int main(void)
{
    func();

    printf("%d", count);

    return 0;
}
