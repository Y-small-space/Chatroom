#include<stdio.h>

#define SHOWLIST(...) printf(#__VA_ARGS__)

int main(void)
{
        SHOWLIST(LLL, 222, 000, 000, 000, 000\n);

        return 0;
}