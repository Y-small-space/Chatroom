#include<stdio.h>
int main(void)
{
    int n = 0;
    int num = 1;
    int sum = 0;
    int i = 0;
    int o = 0;
    scanf("%d",&n);
    for ( ;n >= 1; n--)
    {
        o = n;
    for ( i = 1 ; i <= o ;  o = o - i  )
    {
        
        num = i * o * num;
     

    }

    sum = sum + num;
    num = 1;


    }
    
    
    printf("%d",sum);

    return 0;
}