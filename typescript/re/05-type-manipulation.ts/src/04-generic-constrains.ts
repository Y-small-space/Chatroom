interface lengthwise {
    length: number
}

function loggingIdentity<Type extends lengthwise>(arg: Type): Type {
    arg.length
    return arg
}

loggingIdentity(['hello', 'world'])
