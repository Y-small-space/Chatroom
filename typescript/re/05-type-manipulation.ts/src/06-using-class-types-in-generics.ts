// // function create<Type>(c:{new ():Type}):Type{
// //     return new c()
// // }

// class BeeKeeper{
//     hasMask:boolean = true
// }

// class ZooKeeper{
//     nametag:string = 'Mike'
// }

// class Aniamal { 
//     numLegs:number = 4
// }

// class Bee extends Aniamal {
//     keeper:BeeKeeper = new BeeKeeper()
// }

// class Lion extends Aniamal {
//     keeper:ZooKeeper = new ZooKeeper()
// }

// function createInstance<A extends Aniamal>(c:new()=>A):A{
//     return new c()
// }

// createInstance(Lion).keeper.nametag
// createInstance(Bee).keeper.hasMask
// createInstance(BeeKeeper)