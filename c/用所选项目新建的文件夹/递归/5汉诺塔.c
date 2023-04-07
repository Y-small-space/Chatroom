#include<stdio.h>

void hanoi(int n, char x, char y, char z);
void hanoi(int n, char x, char y, char z)
{
    if (n == 1)
    {
        printf("%c --> %c\n", x, z);
    }
    else
    {   
        printf("n = %d\n",n);
        hanoi(n - 1, x, z, y);
        printf("n = %d\n", n);
        printf("n = %d\n", n);
        printf("n = %d\n", n);
        printf("%c --> %c\n", x, z);
        hanoi(n - 1, y, x, z);
        printf("n = %d\n", n);
    }    
}

int main(void)
{
    int n;

    printf("请输入汉诺塔的层数:");
    scanf("%d", &n);
    hanoi(n, 'x', 'y', 'z');

    return 0;
}