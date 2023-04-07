#include<stdio.h>

#define name "迪迦奥特曼"
#define hight 12
#define weight 60
#define skill "等离子光线"
#define army "哥斯拉"
int main(void)
{
    printf("%s是光之国的战士\n",name);
    printf("他的身高为%d千米\n",hight);
    printf("他的体重为%d顿\n",weight);
    printf("现在正在和怪兽%s打架\n",army);
    
    printf("他刚刚用的技能是%s\n",skill);
    return 0;

}