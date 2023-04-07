//指针函数
#include<stdio.h>

char *getword(char);

char *getword(char c)
{
        switch (c)
        {
        case 'A': return "apple";
        case 'B': return "banana";
        case 'C': return "cat";
        case 'D': return "dog";
            
        default : return "noun";        
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