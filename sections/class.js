// Classes
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SompleClass has id: ".concat(this.id));
        // console.log(`SompleClass.print() called`)
    };
    return SimpleClass;
}());
// THIS keyword
var mySimpleClass = new SimpleClass();
mySimpleClass.id = 123;
mySimpleClass.print();
