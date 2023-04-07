#include<stdio.h>

char *getword(char);

char *getword(char c)
{
		char str1[] = "apple";
		char str2[] = "banana";
        char str3[] = "cat";
        char str4[] = "dog";
		char str5[] = "none";
        switch (c)
        {
			case 'A' : return str1;  //不要返回局部变量的指针。
			case 'B' : return str2;
			case 'C' : return str3;
			case 'D' : return str4;
			default : return str5;
		}
}
int main(void)
{
        char input;

        printf("请输入一个字母：");
        scanf("%c", &input);

        printf("%s\n", getword(input));

        return 0;
}