#include<stdio.h>

void recurision(void);

void recurision(void)
{
    printf("Hi!\n");

    static int count = 10;

  if (count--)
    {
    recurision();
    }
    
}

int main(void)
{
    recurision();

    return 0;    
}
