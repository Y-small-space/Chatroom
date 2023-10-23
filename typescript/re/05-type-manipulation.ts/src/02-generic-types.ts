function identity<Type>(arg: Type): Type {
    return arg
}

// let myIdentify: <Type>(arg: Type) => Type = identity
// let myIdentify: <Input>(arg: Input) => Input = identity
// let myIdentify:{<Type>(arg:Type):Type} = identity

// interface GenericIdentityFn {
//     <Type>(arg: Type): Type
// }

// let myIdentify: GenericIdentityFn = identity

interface GenericIdentityFn<Type> {
    (arg: Type): Type
}

let myIdentify: GenericIdentityFn<string> = identity