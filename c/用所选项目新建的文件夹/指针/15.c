#include<stdio.h>

int main(void)
{
    int num = 1024;
    int *pi = &num;
    char *ps = "pig";
    void *pv;

    pv = pi;
    printf("pi = %p\n pv = %p\n", pi, pv);
    printf("pv = %d\n", *(int*)pv);

    pv = ps;
    printf("ps = %p\n pv = %p\n", ps, pv);
    printf("pv = %s\n", (char*)pv);

    return 0;
}