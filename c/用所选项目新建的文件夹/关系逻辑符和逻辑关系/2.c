#include<stdio.h>

int main(void)
{
   int a = 5;
   int b = 3;

    printf("%d\n",3>1 && 1<2);
    printf("%d\n",3+1||2==0);//非0都为真
    printf("%d\n",!(a+b));
    printf("%d\n",!0 + 1 < 1||!(3+4));
    printf("%d\n",'a'+'b'&& 'c');

    return 0;


}