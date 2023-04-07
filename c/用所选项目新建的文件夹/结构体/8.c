#include<stdio.h>
#include<stdlib.h>

struct Date
{
    int year;
    int mouth;
    int day;
};


struct Book
{
    char title[128];
    char author[40];
    float price;
    struct Date date;
    char publisher[40];
};

void getInput(struct Book *book);
void Bookprint(struct Book *book);

void getInput(struct Book *book)
{
    printf("请输入书名：\n");
    scanf("%s", book->title);
    printf("请输入作者：\n");
    scanf("%s", book->author) ;
    printf("请输入售价：\n");
    scanf("%f", &book->price);
    printf("请输入出版日期：\n"); 
    scanf("%d-%d-%d", &book->date.year, &book->date.mouth, &book->date.day);
    printf("请输入出版社：\n"); 
    scanf("%s", book->publisher);
};

void Bookprint(struct Book *book)
{
    printf("书名：%s\n", book->title);
    printf("作者：%s\n", book->author);
    printf("售价：%.2f\n", book->price);
    printf("出版日期：%d-%d-%d\n", book->date.year, book->date.mouth, book->date.day);
    printf("出版社：%s\n", book->publisher);
}

int main(void)
{
    struct Book *b1, *b2;

    b1 = (struct Book*)malloc(sizeof(struct Book));
    b2 = (struct Book*)malloc(sizeof(struct Book));

    if (b1 == NULL || b2 == NULL)
    {
        printf("内存分配失败！！！\n");
        exit(1);        
    }
    
    printf("请录入第一本书的信息。。。。\n");
    getInput(b1);
    putchar('\n');
    
    printf("请输入第二本书的信息。。。。\n");
    getInput(b2);

    printf("\n\n录入完毕，正在打印。。。。。\n\n");

    printf("第一本书的信息为：\n");
    Bookprint(b1);
    
    putchar('\n');
    
    printf("第二本书的信息为：\n");
    Bookprint(b2);

    free(b1);
    free(b2); 

    return 0;
}



