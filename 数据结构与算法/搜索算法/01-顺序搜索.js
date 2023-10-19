function search(arr, n) {
    for (let i = 0; i < n; i++) {
        if (arr[i] === n){
            return i
        }
    }
    return -1
}

let arr = [2,7,4,6,3]

let n = search(arr,6)
console.log(n)