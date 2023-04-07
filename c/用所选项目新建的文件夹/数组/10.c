#include<stdio.h>
#include<string.h>

int main(void)
{
    char str1[] = "abcdefg";
    char str2[] = "abcdef";

    if (!strcmp(str1, str2))
    {
        printf("两个字符串相符！");
    }
    else
    {
        printf("两个字符串不相符！");
    }

    return 0;
}