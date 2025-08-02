// Namespaces

namespace FirstNameSpace {
    class NotExported { 

    }
    export class NameSpaceClass {
        id: number;
    }
}

namespace SecondNameSpace {
    export class NameSpaceClass {
        name: string;
    }
}

let firstNameSpace = new FirstNameSpace.NameSpaceClass();

// Property 'NotExported' does not exist on type 'typeof FirstNameSpace'.ts(2339)
// let notExported = new FirstNameSpace.NotExported()

let secondNameSpace = new SecondNameSpace.NameSpaceClass()