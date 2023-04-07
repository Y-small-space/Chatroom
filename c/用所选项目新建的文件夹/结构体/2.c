#include<stdio.h>

int main(void)
{
    struct A 
    {
            char a;
            char c;
            int b;
    }a = {'o', 520, 'x'};

    printf("sizeof a is %d\n", sizeof(a));

    return 0;
    
}