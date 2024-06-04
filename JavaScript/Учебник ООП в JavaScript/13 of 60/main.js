class Employee {
    #name;
    #salary;
    #age;

    constructor(name, salary, age) {
        this.#name = name;
        this.#salary = salary;
        this.#age = age;
    }

    getInfoEmployee() {
        return `${this.#name}, ${this.#salary}, ${this.#age}`
    }
}

let employeeOne = new Employee("Ivan", 500_000, 19)
console.log(employeeOne.getInfoEmployee())