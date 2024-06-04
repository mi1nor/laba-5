class Student {
    name;
    surn;

    upperFirstSymbol(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    };

    getInitials() {
        return this.name[0].toUpperCase() + "." + this.surn[0].toUpperCase();
    };

    show() {
        return this.name + ' ' + this.surn
    };
}

let firstStudent = new Student;

firstStudent.name = "ivan"
firstStudent.surn = "danilovskiy"

console.log(firstStudent.upperFirstSymbol(firstStudent.name))
console.log("Initials: " + firstStudent.getInitials())
console.log(firstStudent.show())