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
 | Luồng thực hiện
 | *******************
 | Loger2 Factory
 | logger2...logger
 | Template Factory
 | Template
 */ 
const componentS = new ComponentS();


/**
 * @TODO Viết lại example 3
 * 
 * @des Example 4  
 */
function withTemplate2(template: string, hookId: string) {
    return function<T extends { new(...args: any[]): {name: string}}> (originalContructor: T) {
        
        // Thay đổi cấu trúc conctructor của class gốc => class extends originalContrucor
        
        // Muốn sửa đổi phải chỉ rõ kiểu class gốc => originalContrucor: T 

        // Kiểu T phải chỉ rõ interface controcutor cũng như interface nguyên mẫu 
        //      => T extends { new(...args: []): { name: string} }
        return class extends originalContructor {
            constructor(...args: any[]){
                super()
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }

        }
    }
}

@withTemplate2('<h1>THis is tag h1</h1>', 'app')
class ComponentS2 {
    constructor(public name: string) {
    }
}


/**
 * @TODO Giải thích withTemplate2
 * 
 * @link https://stackoverflow.com/questions/13407036/how-does-interfaces-with-construct-signatures-work
 * @link https://fettblog.eu/typescript-interface-constructor-pattern/
 * 
 * @des Interface with construct signatures
 *      Rằng buộc contructor và đầu ra đối tượng của class 
 *      new (...args: any[]): { [index: string]: any} 
 *           contructor             instance class
 */
interface IFilter {
    new(name: string): { name: string}
}

function handleFilter(filter: IFilter) {
    return new filter('new name');
}

class ClassFilter {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

/**
 * @output { name: 'new name' }
 */
handleFilter(ClassFilter)