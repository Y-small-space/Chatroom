#include<stdio.h>
int main(void)
{
     int i = 0;
    int n = 0;
    int ret = 1;
    int sum = 0;
    int in = 0;
    scanf("%d",&in);
    
   for ( n = 1 ; n <= in; n++)
   {
       
    for ( i = 1; i <= n ; i++)
    {
        ret = ret * i;

    }
    sum = sum + ret;
    ret = 1;
   }
   

    printf("%d",sum);
    return 0;
}