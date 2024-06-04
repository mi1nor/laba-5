class Employee {
    name;
    age;
    salary;

    work(name, salary) {
        return name + ', ' + 'work! ' + 'Его зарплата - ' + salary
    }

    getNameEmployee() {
        return this.name
    }

    getSalaryEmployee() {
        return this.salary
    }
}

let employeeOne = new Employee;
let employeeTwo = new Employee;
let employeeThree = new Employee;

employeeOne.name = "Ivan"
employeeOne.salary = 1_000_000

employeeTwo.name = "Stepan"
employeeTwo.salary = 500_000

employeeThree.name = "Ruslan"
employeeThree.salary = 1_250_000

console.log(employeeOne)
console.log(employeeTwo)
console.log(employeeThree)

console.log(employeeOne.work(employeeOne.name, employeeOne.salary))

console.log("Name: " + employeeOne.getNameEmployee()+ "\n", "Salary: " + employeeOne.getSalaryEmployee())