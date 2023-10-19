type GreetFuction = (a: string) => void

function greeter(fn:GreetFuction) {
    fn('hello')
}

function printToConsole(s: string) {
    console.log(s)
}

greeter(printToConsole)