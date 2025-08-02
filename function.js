function log(val) { console.log(val); }
// function addNumber(a:number, b: number): string {
//     return (a + b).toString();
// }
var addString = function (a, b) {
    return a + b;
};
log(addString('smart', 'asd'));
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 50; }
    return firstName + " " + lastName;
}
function buildPerson(firstName) {
    var remainingName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        remainingName[_i - 1] = arguments[_i];
    }
    return firstName + " " + remainingName.join(" ");
}
var personOne = buildPerson('john', 'steve', 'paul');
log(buildName('yaw'));
log(buildPerson('yaw'));
