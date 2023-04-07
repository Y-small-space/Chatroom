#include<stdio.h>
int main(void)
{
   /* char str[] = "wwwwww";
    int count = 0;

    while ( *str++ != '0')
    {
            count++;
    }
    
    printf("总共有%d个字符！\n".count);*///c语言中左值不可以被修改？！
    char str[] = "wwwww";
    char *target = str;
    int count = 0;

    while ( *target++ != '\0')
    {
            count++;
    }

    printf("总共有%d个字符！", count);

    return 0;
}