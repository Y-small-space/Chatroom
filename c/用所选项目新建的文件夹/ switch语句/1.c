#include<stdio.h>
int main(void)
{
    char ch ;
    printf("please input your grade!:");
    scanf("%c",&ch);

    switch (ch)
    {
    case 'A':printf("你的成绩在90分以上");break;
    case 'B':printf("你的成绩在80分到90分之间！");break;
    case 'C':printf("你的成绩在70分到80分之间");break;
    case 'D':printf("你的成绩在60分到70分之间");break;
    case 'E':printf("你的成绩在60分一下");break;
    default:printf("你输入的内容错误，请重新输入");
    }

    return 0;

}