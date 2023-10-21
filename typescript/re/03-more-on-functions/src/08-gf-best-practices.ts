import { func } from "prop-types"

// 1. 可能的情况下，使用类型参数本身，而不是对其进行约束
function firstElement1<Type>(arr: Type[]) {
    return arr[0]
}

function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0]
}

const a = firstElement1([1, 2, 3])
const b = firstElement2([1, 2, 3])

// 2. 总是尽可能少地使用参数类型
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean) {
    return arr.filter(func)
}

function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
) {
    return arr.filter(func)
}

// 3. 如果一个类型的参数只出现在一个地方，请重新考虑你是否真的需要它
function greet<Str extends string>(s: Str) {
    console.log('Hello,' + s)
}

greet('world')

function greet2(s: string) {
    console.log('hello,' + s)
}