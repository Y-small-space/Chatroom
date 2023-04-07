#include<stdio.h>

void a(void);
void b(void);
void c(void);
int count;

int main(void)
{
	a();
	b();
	c();
	b();

	printf("%d", count);

	return 0;
}
