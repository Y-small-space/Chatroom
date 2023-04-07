#include<stdio.h>
int main(void)
{
    int ch = 0;
    printf("Please input a number:");
    
    while ((ch = getchar()) !=EOF)
    {
        if (ch<'0'||ch>'9')
        {
            continue;
        }
        putchar(ch);
    }

    return 0;

    
}