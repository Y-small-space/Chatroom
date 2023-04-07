#include<stdio.h>

int main(void)
{
    char *cbooks[] = {
        "《1》",
        "《2》",
        "《3》",
        "《4》",
        "《5》",
        "《6》",
        "《7》"
    };
    int i;
    char **num1;
    char **num2[6];

    num1 =  &cbooks[6];
    num2[0] = &cbooks[0];
    num2[1] = &cbooks[1];
    num2[2] = &cbooks[2];
    num2[3] = &cbooks[3];
    num2[4] = &cbooks[4];
    num2[5] = &cbooks[5];

    printf("num1 = %s\n", *num1);
    printf("num2 = ");

    for ( i = 0; i < 6; i++)
    {
        printf("%s", *num2[i]);
    }
    
    return 0;
}