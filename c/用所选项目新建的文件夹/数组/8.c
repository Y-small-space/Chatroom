#include<stdio.h>
#include<string.h>

int main(void)
{
    char str1[50] = "I love";
    char str2[] = "computer";

    strcat(str1, " ");
    strcat(str1, str2);

    printf("str1 = %s", str1);



    return 0;
}