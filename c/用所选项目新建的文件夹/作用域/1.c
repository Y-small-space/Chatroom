#include<stdio.h>
int main(void)
{
    int i = 10;//i1
    {
        int i = 100;//i2
        {
            int i = 10000;//i3
            printf("i = %d\n", i);
        }
        //i = 100;
        {
            printf("i = %d\n",i);
            int i = 1000;//i4
            printf("i = %d\n", i);        
        }
        printf("i = %d\n", i);
    }
    printf("i = %d\n", i);        
    
}