// // Class Modifiers
// class ClassWithPublicProperty {
//     public id: number;
//     private idPrivate: number;
//     readonly name: string = 'yogi';
// }

// let publicAccess = new ClassWithPublicProperty();
// publicAccess.id = 20;
// publicAccess.name = 'yogi' // Cannot assign to 'name' because it is a read-only property.ts(2540)
// publicAccess.idPrivate = 20; // Property 'idPrivate' is private and only accessible within class 'ClassWithPublicProperty'.ts(2341)
// console.log(publicAccess);

// class classWithAutomaticProperties {
//     constructor(public id: number, private name: string) {
        
//     }
// }

// let myAutoClass = new classWithAutomaticProperties(1, 'className');
// console.log(`myAutoClass id: ${myAutoClass.id}`);
// // console.log(`myAutoClass name: ${myAutoClass.name}`);



// // // ---- new
class ClassWithPublicProperty {
    private _id: number;
    private _name: string;
    static _hobby: string = 'This is the static property';

    static printData(): void {
        console.log(this._hobby)
    }

    get id() : number {
        return this._id;
    }
    
    get name() : string {
        return this._name;
    }
}
console.log(ClassWithPublicProperty._hobby);
ClassWithPublicProperty._hobby = 'Jadi Presiden'
console.log(ClassWithPublicProperty._hobby);