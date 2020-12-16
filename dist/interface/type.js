"use strict";
const Noan3 = {
    name: 'noan',
    privileges: ['private'],
    createDate: new Date()
};
function printEmployeeInformation(emp) {
    console.log("Name: ", emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ', emp.privileges);
    }
    if ('createDate' in emp) {
        console.log('CreateDate: ', emp.createDate);
    }
}
/**
 * TODO: Mix Class
 */
class Car {
    drive() {
        console.log("Car driver...");
    }
}
class Truck {
    drive() {
        console.log("Truck driver");
    }
    loadCargo() {
        console.log('loadCargo....');
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vc) {
    vc.drive();
    if (vc instanceof Truck) {
        vc.loadCargo();
    }
}
useVehicle(v1);
useVehicle(v2);
function animalMove(animal) {
    let speed;
    switch (animal.type) {
        case 'Bird':
            speed = animal.flyingSpeed;
            break;
        case 'Horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Animal move speed: ", speed);
}
//# sourceMappingURL=type.js.map