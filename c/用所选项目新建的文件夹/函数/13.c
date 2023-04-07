//将函数指针作为返回值

#include<stdio.h>
int add(int, int);//首先定义两个
int sub(int, int);//函数给予选择
int calc(int (*fp)(int, int), int, int);//这是一个储存函数地址的函数
int (*select(char op))(int, int);//这个函数用来判断该用什么函数

int add(int num1, int num2)
{
        return num1 + num2;
}
int sub(int num1, int num2)
{
        return num1 - num2;
}
int calc(int (*fp)(int , int), int num1, int num2)
{
        return (*fp) (num1, num2);
}
int (*select(char op))(int, int)
{
    switch(op)
    {
    case '+' : return add;
    case '-' : return sub;
    }
}
int main(void)
{
    int num1, num2;
    char op;
    int (*fp)(int , int);

    printf("请输入一个式子：（如:1+3)");
    scanf("%d%c%d", &num1, &op, &num2);

    fp = select(op);
    printf("%d%c%d = %d\n", num1, op, num2, calc(fp, num1, num2));
    

    return 0;
}