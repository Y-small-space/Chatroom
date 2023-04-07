#include<stdio.h>

void quick_sort(int array[], int left, int right);
void quick_sort(int array[], int left, int right)
{
        int i = left, j = right;
        int temp;
        int pivot;//定义一个基准点。

        pivot = array[(left + right) / 2];

        while (i <= j)
        {
                //从左到右找到大于等于基准点的元素。
                while (array[i] < pivot)
                {
                    i++;
                }
                //从右到左找到小于等于基准点的元素。
                while ( array[j] > pivot)
                {
                    j--;
                }
                //如果i>j互换它们的位置。
                if (i <= j)
                { 
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                    i++;
                    j--;
                }
        }

        if (left < j)
        {
            quick_sort(array, left, j);
        }
        if (right > i)
        {
            quick_sort(array, i, right);
        }
               
}

int main(void)
{
    int array[] = {33, 22, 11, 99 , 44, 77, 55, 00, 66, 12, 23};
    int i, length;

    length = sizeof(array) / sizeof(array[0]);
    quick_sort(array, 0, length-1);
    
    for ( i = 0; i < length; i++)
    {
        printf(" %d", array[i]);
    }
    

    return 0;
}