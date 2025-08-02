var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract Classes
var AbstractEmployee = /** @class */ (function () {
    function AbstractEmployee() {
    }
    /**
     *  printDetails
     */
    AbstractEmployee.prototype.printDetails = function () {
        console.log(this.getDetails());
    };
    return AbstractEmployee;
}());
var NewEmployee = /** @class */ (function (_super) {
    __extends(NewEmployee, _super);
    function NewEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewEmployee.prototype.getDetails = function () {
        return "id: ".concat(this.id, ", name: ").concat(this.name);
    };
    return NewEmployee;
}(AbstractEmployee));
var NewManager = /** @class */ (function (_super) {
    __extends(NewManager, _super);
    function NewManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewManager.prototype.getDetails = function () {
        return _super.prototype.getDetails.call(this) + ", Empployee Count ".concat(this.Employees.length);
    };
    return NewManager;
}(NewEmployee));
var employee = new NewEmployee();
employee.id = 1;
employee.name = "Hi Karyawanku";
employee.printDetails();
var manager = new NewManager();
manager.id = 2;
manager.name = "Hi ManagerCute";
manager.Employees = new Array();
manager.printDetails();
