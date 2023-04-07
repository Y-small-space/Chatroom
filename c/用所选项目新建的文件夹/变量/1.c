#include<stdio.h>

void a();
void b();
void c();

int count  = 0;//全局变量；

void a()
{
    count ++;
}
void b()
{
    count ++;
}
void c()
{
    count ++;
}

int main(void)
{
    a();
    b();
    c();
    a();

    printf("%d", count);

    return 0;

}