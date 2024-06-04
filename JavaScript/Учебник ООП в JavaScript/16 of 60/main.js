class Employee {

    #name;
    #salary;
    #age;

    constructor(name, salary, age) {
        this.#name = name;
        this.#salary = salary;
        this.#age = age;
    }

    getName() {
        return this.#name
    }

    getSalary() {
        return this.#salary;
    }

    getAge() {
        return this.#age;
    }
}

let employeeOne = new Employee("Ivan", 500_000, 19)

console.log(employeeOne.getAge())