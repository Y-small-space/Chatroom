#include<stdio.h>
#include <string.h>

int main(void)
{
    char str1[] = "aaaaaa";
    char str2[] = "bbbbb";
    char str3[100];

    strcpy(str1, str2);
    strcpy(str3, "copy successful");

    printf("str1 = %s\n", str1);
    printf("str2 = %s\n", str2);
    printf("str3 = %s\n", str3);

    return 0;
}