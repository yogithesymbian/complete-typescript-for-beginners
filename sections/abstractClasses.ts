// Abstract Classes
abstract class AbstractEmployee {
    public id: number;
    public name: string;
    abstract getDetails(): string;
    /**
     *  printDetails
     */
    public  printDetails() {
        console.log(this.getDetails())
    }
}

class NewEmployee extends AbstractEmployee {
    getDetails(): string {
        return `id: ${this.id}, name: ${this.name}`
    }
}

class NewManager extends NewEmployee {
    public Employees: NewEmployee[];
    getDetails(): string {
        return super.getDetails() + `, Empployee Count ${this.Employees.length}`
    }
}

let employee = new NewEmployee()
employee.id = 1;
employee.name = "Hi Karyawanku";
employee.printDetails();

let manager = new NewManager()
manager.id = 2;
manager.name = "Hi ManagerCute";
manager.Employees = new Array();
manager.printDetails();