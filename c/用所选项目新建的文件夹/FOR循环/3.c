#include<stdio.h>
int main (void)
{
    int arr[10] = {1,2,3,4,5,6,7,8,9,10};
    int i = 0;

    for ( i = 0; i < 10; i++)
    /*
    10可以表示：
    10次循环
    10次打印
    10个元素
    */
    {
        printf("%d\n",arr[i]);
        printf("%d\n",i);
    }
    
    return 0;
}
