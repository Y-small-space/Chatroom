const arr = [35, 2, 3, 12, 32, 43, 54, 32, 56, 76, 99]
function radixSort(arr) {
    const base = 10
    let divider = 1

    let maxVal = Math.max(...arr)
    while (divider <= maxVal) {
        // 构建二维数组
        const buckets = [...Array(10)].map(() => [])
        for (let val of arr) {
            buckets[Math.floor(val / divider) % base].push(val)
        }

        console.log(buckets)
        arr = [].concat(...buckets)
        divider *= base
    }
    console.log(arr)
}
radixSort(arr)