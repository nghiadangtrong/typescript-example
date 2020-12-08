"use strict";
class Department {
}
class Person extends Department {
    constructor(id, name, age) {
        super();
        this.id = id;
        this.name = name;
        this.age = age;
        this.created = '';
    }
    describe() {
        console.log(`Describe ${this.name}: ${this.age}`);
    }
    get createdAt() {
        return this.created;
    }
    set createdAt(value) {
        if (value) {
            this.created = value;
        }
        throw new Error('value not empty');
    }
    static setMinAge(age) {
        Person.minAge = age;
    }
}
Person.minAge = 0;
const Noan = new Person(1, 'noan', 20);
Noan.describe();
/**
 * Use get | set
 */
Noan.createdAt = Date.now().toString();
console.log('Noan.createdAt', Noan.createdAt);
//# sourceMappingURL=classSummary.js.map