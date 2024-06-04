class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getNameEmployee() {
        return this.name
    }

    getSalaryEmployee() {
        return this.salary
    }

    upSalaryEmployee() {
        return this.salary / 100 * 10 + this.salary
    }
}

let employeeOne = new Employee("Ivan", 500_000)

console.log(employeeOne.upSalaryEmployee())