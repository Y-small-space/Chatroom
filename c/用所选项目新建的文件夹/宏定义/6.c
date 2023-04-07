#include<stdio.h>

#define STR(s) #s

int main(void)
{
        printf(STR(Hello         %s num = %d), STR(WORLD), 520);

        return 0;
}