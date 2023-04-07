#include<stdio.h>

#define SQUARE(x) ((x) * (x))

int main(void)
{
        int i = 1;
        int num;

        while (i <= 100)
        {
                num = i++;

                printf("%d的平方数是%d\n", num, SQUARE(num)); 
        }

        return 0;
        
}