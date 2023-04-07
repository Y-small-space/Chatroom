#include<stdio.h>

#define PI 3.14
#define R 6371
#define V PI * R * R * R * 4/3

int main(void)
{
        int r;
        float s;

        printf("请输入圆的半径：");
        scanf("%d", &r);

        //#undef PI;

        s = PI * r * r;

        printf("圆的半径是：%.2f\n", s);

        printf("%.2f", V);
        return 0;

}