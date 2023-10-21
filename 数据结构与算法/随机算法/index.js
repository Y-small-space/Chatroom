function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 2))
        swap(array, i, randomIndex)
    }
    return array
}

function swap(array, a, b) {
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
}

console.log(shuffle([1, 2, 3, 4, 5, 6]))