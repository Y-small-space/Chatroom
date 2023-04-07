#include<stdio.h>
#include<string.h>

int main(void)
{
    char str[] = "I love programming!";

    printf("sizeof str = %lu\n", sizeof(str));//sizeof 字符串大小
    printf("streln str = %lu\n", strlen(str));//strlen 字符串长度
    printf("%s",str);

    return 0;
}