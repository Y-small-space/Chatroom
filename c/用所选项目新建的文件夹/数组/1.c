#include<stdio.h>
#define NUM 10
int main(void)
{
    int s[NUM];
    int i,sum = 0;

    for ( i = 0; i < 10; i++)
    {
        printf("请输入第%i位同学的成绩 : ",i + 1);
        scanf("%d",&s[i]);
        sum += s[i];    
    }
    
    printf("成绩录入完毕，改次考试的平均分是：%.2f\n",(double)sum / NUM);
    
    return 0;
}