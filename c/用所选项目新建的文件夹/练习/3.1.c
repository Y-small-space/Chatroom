#include<stdio.h>
int main(void)
{
     int i = 1;
    int n = 0;
    int ret = 1;
    int sum = 0;
    int in = 0;
    scanf("%d",&in);
    
   for ( n = 1 ; n <= in; n++)
   {
    ret = ret * n;
    sum = sum + ret;
   }
   

    printf("%d",sum);
    return 0;
}