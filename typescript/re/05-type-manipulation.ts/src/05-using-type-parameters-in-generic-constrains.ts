function getProperty<Type, key extends keyof Type>(obj: Type, key: key) {
    return obj[key]
}

let x = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

getProperty(x, 'a')
// getProperty(x, 'm')