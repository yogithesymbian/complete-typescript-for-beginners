// Implementing Interfaces
interface IPrint {
    print();
}

function printClass(a:IPrint) {
    console.log(a)
    return null
}

class ClassA implements IPrint {
    print() {
        console.log('ClassA.print()')
    }
}
class ClassB implements IPrint {
    print() {
        console.log('ClassB.print()')
    }
}

let classA = new ClassA();
classA.print();
let classB = new ClassB();
classB.print();