#include<stdio.h>

void func(void);

void func(void)
{
    static int count = 0;//static使count从局部变量指定为静态局部变量所以它的生存期和全局变量一样。并且其作用域没有变还是在局部变量。 
    printf("count = %d\n", count);
    count++;
}

int main(void)
{
    int i;

    for ( i = 0; i < 10; i++)
    {
        func();
    }
     
    return 0;
}