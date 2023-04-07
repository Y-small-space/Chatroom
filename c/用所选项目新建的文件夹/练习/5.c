#include <stdio.h>
int main(void)
{
    char i ;
    
    printf("请输入一个字母：");
    scanf("%c",&i);
    printf("%c的ASSCII码为:%d",i,i );
    
    return 0;
}