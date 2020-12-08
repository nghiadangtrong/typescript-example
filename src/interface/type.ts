type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    createDate: Date;
}

/**
 * TODO: Merge
 */
type ElevatedEmployee = Admin & Employee;

const Noan3: ElevatedEmployee = {
    name: 'noan',
    privileges: ['private'],
    createDate: new Date()
}

type Combinable = string | number;
type Numberic = number | boolean;
type Universal = Combinable & Numberic;

/**
 * TODO: Mix Type
 */
type UnknowEmployee = Admin | Employee;

function printEmployeeInformation (emp: UnknowEmployee) {
    console.log("Name: ", emp.name);
    if('privileges' in emp) {
        console.log('Privileges: ', emp.privileges)
    } 
    if('createDate' in emp) {
        console.log('CreateDate: ', emp.createDate)
    }
}

/**
 * TODO: Mix Class
 */
class Car {
    drive() {
        console.log("Car driver...")
    }
}

class Truck { 
    drive () {
        console.log("Truck driver")
    }

    loadCargo() {
        console.log('loadCargo....')
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vc: Vehicle) {
    vc.drive();
    if(vc instanceof Truck) {
        vc.loadCargo();
    }
}

useVehicle(v1);
useVehicle(v2);

/**
 * TODO: Mix interface | ap dung vao reducer duoc
 */
interface Bird {
    type: 'Bird',
    flyingSpeed: number;
}

interface Horse {
    type: 'Horse',
    runningSpeed: number;
}

type Animal = Bird | Horse;

function animalMove(animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'Bird':
            speed = animal.flyingSpeed;
            break;
        case 'Horse': 
            speed = animal.runningSpeed;
            break;
    }
    console.log("Animal move speed: ", speed);
}