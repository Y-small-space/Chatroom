#include<stdio.h>
int main(void)
{
    char str[20] = "sbawsssss";
    char *p = str;

    printf("*p = %c, *(p+1) = %c, *(p+2) = %c\n", *p, *(p+1), *(p+2));

    return 0;
}