// 

// function len(s: string): number
// function len(arr: any[]): number
// function len(s: any) {
//     return s.length
// }
function len(x: any[] | string) {
    return x.length
}

len('hello')
len([1, 2, 3])
len(Math.random() > 0.5 ? 'Hello' : [4, 5, 6])