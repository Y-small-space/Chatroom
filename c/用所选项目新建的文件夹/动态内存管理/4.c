#include<stdio.h>
#include<stdlib.h>

int main(void)
{
        int *ptr;
        int num = 123;

        ptr = (int *) malloc(sizeof(int));
        if(ptr == NULL)
        {
                printf("分配内存失败！\n");
                exit(1);
        }
        printf("请输入一个数值：");
        scanf("%d", ptr);

        ptr = &num;

        printf("你输入的数值是：%d", *ptr);
        free(ptr);

        return 0;
}

