#include<stdio.h>
#include<stdlib.h>

int main(void)
{
        int *ptr1 = NULL;
        int *ptr2 = NULL;

        ptr1 = (int *)malloc(sizeof(int));
        ptr2 = (int *)malloc(sizeof(int));

        printf("stack:  %p --> %p\n", &ptr1, &ptr2);
        printf("heap:  %p --> %p\n", ptr1, ptr2);
        
        ptr1 = (int *)realloc(ptr1, 5 * sizeof(int));
        printf("heap:  %p --> %p\n", ptr1, ptr2);

        return 0;

}