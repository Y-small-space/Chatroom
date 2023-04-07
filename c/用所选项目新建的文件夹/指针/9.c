#include<stdio.h>
int main(void)
{   
    char *p1[5] = {
        "llll",
        "llll",
        "lll",
        "l",
        "lll"
    };
    int i;

    for ( i = 0; i < 5; i++)
    {
        printf("%s \n",p1[i] );
    }
    
    return 0;


}