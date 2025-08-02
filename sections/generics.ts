// Generics

function identify<T>(args:T):T {
    return args
}

let a = identify("myString")
let b = identify<number>(1)
let c = identify<boolean>(true)


// Generics Interfaces
interface GenericInterface<T> {
    (arg: T): T;
}

class GenericClass<T> {
    zeroValue: T;
    add: (x: T, y:T) => T;
}