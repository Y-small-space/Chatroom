#include<stdio.h>
#include<stdlib.h>
#include<string>

int main(void)
{
        int *ptr1 = NULL;
        int *ptr2 = NULL;

        //第一次申请的内存空间。
        ptr1 = (int *)malloc(10 * sizeof(int));
        
        //进行若干操作之后发现ptr1申请的内存空间竟然不够用！！！

        //第二次申请的内存空间。
        ptr2 = (int *)malloc(20 * sizeof(int));
        
        //将ptr1的数据拷贝到ptr2.
        memcpy(ptr2, ptr1, 10);  
        free(ptr1);

        //对ptr2申请的内存空间进行若干操作。。。

        free(ptr2);

        return 0;

}