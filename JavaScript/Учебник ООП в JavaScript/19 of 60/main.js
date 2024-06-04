class Employee {
    #name;
    #salary;
    #age;

    setName(name) {
        this.#name = name;
        return this;
    }

    setSalary(salary) {
        this.#salary = salary;
        return this;
    }

    setAge(age) {
        if (age > 0 && age <= 120) {
            this.#age = age;
        }
        else {
            throw new Error('age is incorrect')
        }
    }

    getName() {
        return this.#name;
    }

    getSalary() {
        return this.#salary + "$";
    }

    getAge() {
        return this.#age;
    }
}

let employeeOne = new Employee;
employeeOne.setName('Ivan').setSalary(500_000)
console.log(employeeOne.getName());
console.log(employeeOne.getSalary());