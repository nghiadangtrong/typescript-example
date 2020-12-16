/**
 * @desciption Example 1 
 */
function loger1 (constructor: Function) {
    console.log("Logging...")
    console.log(constructor)
}

@loger1
class Computer1 {
    name= 'noan';

    constructor() {
        console.log("Create Computer object...")
    }
}

const cp1 = new Computer1(); 
console.log(cp1)

/**
 * Example 2
 * 
 * @description Decorator Factories
 */
function loger2 (text: string) {
    console.log('Loger2 Factory')
    return function (constructor: Function) {
        console.log(`logger2...${text}`);
        console.log(constructor);
    }
}

class Computer2 {
    name = 'noan';
    constructor() {
        console.log('Create computer2 object....')
    }
}

const cp2 = new Computer2();
console.log(cp2)

/**
 * Example 3
 * @description order call
 */
function withTemplates(template: string, hookId: string) {
    console.log('Template Factory')
    return function (constructor: any) {
        console.log('Template')
        const hookEl = document.getElementById(hookId);
        const ct = new constructor();
        if(hookEl) { 
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = ct.name;
        }
    } 
}

@loger2('logger')
@withTemplates('<h1>This is noi dung</h1>', 'app')
class ComponentS {
    name = 'name component';
    constructor() {
        console.log('initial component')
    }
}

/**
 | Output order
 | *******************
 | Loger2 Factory
 | logger2...logger
 | Template Factory
 | Template
 */ 
const componentS = new ComponentS();