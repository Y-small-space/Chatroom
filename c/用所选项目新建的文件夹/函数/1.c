#include<stdio.h>
#include<string.h>
int main(void)
{
    char arr1[] = "bit";
    char arr2[20] = "######";
    strcpy(arr2,arr1);
    printf("%s", arr2);

    return 0;

}