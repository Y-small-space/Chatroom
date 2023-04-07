#include<stdio.h>
int main(void)
{
    int n , i,num,m;
    scanf("%d",&n);
    
    for ( i = 1 , m = 1; i < n ;  n--  )
    {
        
        num = i * n * m;
        m = num;

    }
    
    printf("%d",num);

    return 0;

}