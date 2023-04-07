#include<stdio.h>
#include<string.h>

int main(void)
{

    char str1[40] = "I love";
    char str2[] = "computer";
    
    strcat(str1 , " ");
    strncat(str1, str2 ,3);//strncat和strncpy不一样的是strncat会自动在结尾添加结束符\o

    printf("str1 = %s", str1);

    return 0;
}