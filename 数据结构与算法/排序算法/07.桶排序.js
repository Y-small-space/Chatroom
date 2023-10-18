function insertSort(arr) {
    const { length } = arr;
    let temp;

    for (let i = 1; i < length; i++) {
        temp = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = temp;
    }
}

function bucketSort(arr, bucketSize = 3) {
    if (arr.length < 2) {
        return arr
    }

    // 创建几个小桶
    const buckets = createBucket(arr, bucketSize)

    // 小桶排序(插入排序算法)，合并concat
    return sortBuckets(buckets)
}

function createBucket(arr, bucketSize) {
    let minValue = Math.min(...arr)
    let maxValue = Math.max(...arr)
    console.log(minValue, maxValue)

    const bucetCount = Math.floor((maxValue - minValue) / bucketSize) + 1

    const buckets = [...Array(bucetCount)].map(() => [])
    console.log(buckets)

    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor((arr[i] - minValue) / bucketSize)
        buckets[index].push(arr[i])
    }

    console.log(buckets)
    return buckets
}

function sortBuckets(arr) {
    let sortArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            insertSort(arr[i])
            sortArr = sortArr.concat(...arr[i])
        }
    }
    return sortArr
}

bucketSort([5, 4, 3, 2, 1, 6, 7, 8, 9, 100])