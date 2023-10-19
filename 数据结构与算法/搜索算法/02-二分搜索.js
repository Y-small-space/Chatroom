function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[0]; // 选择一个基准元素
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]); // 小于基准的元素放在left
        } else {
            right.push(array[i]); // 大于基准的元素放在right
        }
    }

    // 递归排序左右两个数组，然后将它们与基准元素合并
    return quickSort(left).concat(pivot, quickSort(right));
}
function binarySearch(find, arr, start, end) {
    start = start | 0
    end = end | arr.length - 1

    arr = quickSort(arr)
    console.log(arr)
}

binarySearch(5,[6,4,8,2,10,1,5])