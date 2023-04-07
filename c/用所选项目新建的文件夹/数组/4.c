#include<stdio.h>
int main(void)
{
    int n , i, m;

    printf("请输入字符个数：");
    scanf("%d",&n);
    m = n + 1;//给后面\0留出一个位置

    char a[m];//定义变量

    printf("请开始输入字符：");//赋值
    for (i = 0; i < m; i++)
    {
        scanf("%c",&a[i]);
    }
    
    a[m] = '\0';//数组最后一个位置是\0

    printf("你输入的字符串是：%s",a);

    return 0;
}