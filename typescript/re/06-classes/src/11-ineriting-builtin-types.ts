// class MsgError extends Error{
//     constructor(m:string){
//         super(m)
//         // 明确的设置原型 Es版本低的情况下
//         Object.setPrototypeOf(this,MsgError.prototype)
//     }
//     sayHello(){
//         return 'hello' + this.message
//     }
// }

// const mesError = new MsgError('hello')
// console.log(mesError.sayHello())

// class MsgError extends Error {
//     constructor(m: string) {
//         super(m)
//         // 明确的设置原型 Es版本低的情况下
//         Object.setPrototypeOf(this, MsgError.prototype)
//     }

//     sayHello(){
//         return 'hello' + this.message
//     }
// }

// const msgError = new MsgError('hello')

// console.log(msgError instanceof MsgError)