#include<stdio.h>
#include<string.h>

int main(void)
{
    char str1[] = "to be or not to be";
    char str2[40];

    strncpy(str2, str1 ,5);

    str2[5] = '\0';

    printf("str2 = %s\n",str2);

    return 0;
}