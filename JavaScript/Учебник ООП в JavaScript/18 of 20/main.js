class Employee {
    #name;
    #salary;
    #age;

    setName(name) {
        this.#name = name;
    }

    setSalary(salary) {
        this.#salary = salary;
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
employeeOne.setAge(5);
console.log(employeeOne.getAge())