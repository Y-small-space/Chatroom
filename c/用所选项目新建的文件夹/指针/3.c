#include<stdio.h>
int main(void)
{
    char str[128];

    printf("请输入一个网站：");
    scanf("%s", str);
    printf("你输入的网站为：%s\n", str);
    printf("str 的地址是：%p\n", str);
    printf("str[0]的地址是：%p\n", &str[0]);
    
    
    return 0;
}