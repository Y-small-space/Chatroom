#include<stdio.h>
int main (void)
{
    int i = 0;

    for ( i = 1; i <= 10 ; i++)
    {
       if (i == 5)
       {
           break;
       }
       
        printf("%d",i);
    }
    
    return 0;

    
}