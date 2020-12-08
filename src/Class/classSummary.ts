abstract class Department {

    abstract describe(value: string): void;
}


class Person extends Department {
    static minAge = 0;
    protected created: string = '';

    constructor(private readonly id: number, private name: string, public age: number) {
        super();
    }

    describe() {
        console.log(`Describe ${this.name}: ${this.age}`)
    }

    get createdAt() {
        return this.created;
    }

    set createdAt(value: string) {
        if(value) {
            this.created = value;
        }
        throw new Error('value not empty')
    }

    static setMinAge (age: number) {
        Person.minAge = age;
    } 

} 

const Noan = new Person(1, 'noan', 20);
Noan.describe();

/**
 * Use get | set
 */
Noan.createdAt = Date.now().toString(); 
console.log('Noan.createdAt', Noan.createdAt)