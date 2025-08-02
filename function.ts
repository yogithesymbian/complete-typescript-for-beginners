function log(val: any): void { console.log(val); }

// function addNumber(a:number, b: number): string {
//     return (a + b).toString();
// }

var addString = function (a:string, b?:string) : string {
    return a + b;
}

log(addString('smart', 'asd'));

function buildName(firstName: string, lastName: number = 50) {
    return firstName + " " + lastName;
}

function buildPerson(firstName: string, ...remainingName: string[]) {
    return firstName + " " + remainingName.join(" ");
}

let personOne = buildPerson('john', 'steve', 'paul')

log(buildName('yaw'));
log(personOne);