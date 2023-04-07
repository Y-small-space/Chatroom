#include<stdio.h>

struct Date
{
        int year;
        int mouth;
        int day;
};

struct Book 
{
        char title[120];
        char author[40];
        float price;
        struct Date date;
        char publisher[100];
}book = {
        "ddddddd",
        "ddddddd",
        3333,
        {2012,02,22},
        "dawdadwa"
        };

int main(void)
{
        struct Book *pt;
        pt = &book;
        
        printf("书名：%s\n", pt ->title);
        printf("作者：%s\n", pt ->author);
        printf("价格: %f\n", pt ->price );
        printf("出版日期：%d-%d-%d\n", pt ->date.year, pt ->date.mouth, pt ->date.day);
        printf("出版社：%s\n", pt ->publisher);

        return 0;
        
}
