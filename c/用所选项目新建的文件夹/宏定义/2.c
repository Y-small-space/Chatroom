#include<stdio.h>

#define TWO 2
#define OW "Consistency is the last refuge of the unimagina\tive. - OScar Wilde"

#define FOUR TWO*TWO
#define PX print("X is %d.\n")
#define FMT "X is %d.\n"

int main(void)
{
    int x = TWO;

    PX;
    x = FOUR;
    print(FMT, x);
    
}