function example() {
    let x: string | number | boolean

    x = Math.random() < 0.5
    console.log(x)

    if (Math.random() < 5) {
        x = 'hello'
        console.log(x)
    } else {
        x = 100
        console.log(x)
    }

    return x
}

let x = example()
x = 'hello'
x = 100
// x = true