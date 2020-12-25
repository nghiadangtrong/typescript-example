/**
 * https://github.com/typestack/class-validator
 * 
 * Check validate
 */

interface ValidatorConfig {
    [name: string]: {
        [prop: string]: string[] 
    }
} 

// Biến lưu trạng thái validate
let registerdValidator :ValidatorConfig = {}

function Required(target: any, propName: string) {
    registerdValidator[target.constructor.name] = {
        ...registerdValidator[target.constructor.name],
        [propName]: ['required']
    }
}

function PositiveNumber(target: any, propName: string) {
    registerdValidator[target.constructor.name] = {
        ...registerdValidator[target.constructor.name],
        [propName]: ['positive']
    }
}

// Ham validate
function validate(obj: any) {
    let objValidator = registerdValidator[obj.constructor.name];

    if(!objValidator) {
        return true;
    }

    let valid = true;
    for(let propName in objValidator) { // get key of object
        for(let validator of objValidator[propName]) { // get value of array
            switch(validator) {
                case 'required': 
                    valid = !!obj[propName];
                    break;
                case 'positive':
                    valid = obj[propName] > 0;
                    break;
            }
        }
    }
    return valid;
}

class Course {

    @Required
    title: String;

    @PositiveNumber
    price: Number;

    constructor(t: String, n: Number) {
        this.title = t;
        this.price = n;
    }
}


let title = '';
let price = 0;

let objCourse = new Course(title, price);

if(!validate(objCourse)) {
    console.log('Is unValidate')
} else {
    console.log('validate')
}