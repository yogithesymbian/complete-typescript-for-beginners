// Classes
class SimpleClass {
    id: number;
    print() : void {
        console.log(`SompleClass has id: ${this.id}`)
        // console.log(`SompleClass.print() called`)
    }
}

// THIS keyword

let mySimpleClass = new SimpleClass();
mySimpleClass.id = 123
mySimpleClass.print()