/* 
冒泡排序的要点：
    1.两两注意是相邻的两个元素的意思
    2.如果有n个元素需要比较n-1次，每一轮减少1次比较
    3.既然叫冒泡排序，那就是从下往上两两比较，所以看上去就跟泡泡往上冒一样。 
*/
#include<stdio.h>

void bubbleSort(int k[],int n);
void bubbleSort(int k[],int n){
    int i, j, temp;

    for(i = 0; i < n-1; i++){
        for ( j = n-1; j > i; j--){
            if (k[j-1]>k[j]){
                temp = k[j-1];
                k[j-1] = k[j];
                k[j] = temp;
            }
        }
    }
}

int main(){
    int i, a[10] = {5,2,6,0,3,9,1,7,4,8};
    bubbleSort(a,10);

    for ( i = 0; i < 10; i++)
    {
        printf("%d",a[i]);
    }
    
    return 0;
}
