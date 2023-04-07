//数组嵌套
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

        printf("书名：%s\n", book.title);
        printf("作者：%s\n", book.author);
        printf("价格: %f\n", book.price );
        printf("出版日期：%d-%d-%d\n", book.date.year, book.date.mouth, book.date.day);
        printf("出版社：%s\n", book.publisher);

        return 0;
        
}
