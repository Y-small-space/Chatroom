#include<stdio.h>
int main(void)
{
    int ret = 0;
    char password[20] = {0};

    printf("请输入密码:");
    scanf("%s",password);

    getchar();
    printf("请确认（N/Y）");
    ret = getchar();

    if (ret == 'Y')
    {
        printf("确认成功");
    }
    
    
    else
    {
        printf("确认失败");
    }
    
    return 0;

}