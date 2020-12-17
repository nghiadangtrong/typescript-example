"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @desciption Example 1
 */
function loger1(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
let Computer1 = class Computer1 {
    constructor() {
        this.name = 'noan';
        console.log("Create Computer object...");
    }
};
Computer1 = __decorate([
    loger1
], Computer1);
const cp1 = new Computer1();
console.log(cp1);
/**
 * Example 2
 *
 * @description Decorator Factories
 */
function loger2(text) {
    console.log('Loger2 Factory');
    return function (constructor) {
        console.log(`logger2...${text}`);
        console.log(constructor);
    };
}
class Computer2 {
    constructor() {
        this.name = 'noan';
        console.log('Create computer2 object....');
    }
}
const cp2 = new Computer2();
console.log(cp2);
/**
 * Example 3
 * @description order call
 */
function withTemplates(template, hookId) {
    console.log('Template Factory');
    return function (constructor) {
        console.log('Template');
        const hookEl = document.getElementById(hookId);
        const ct = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = ct.name;
        }
    };
}
let ComponentS = class ComponentS {
    constructor() {
        this.name = 'name component';
        console.log('initial component');
    }
};
ComponentS = __decorate([
    loger2('logger'),
    withTemplates('<h1>This is noi dung</h1>', 'app')
], ComponentS);
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
function withTemplate2(template, hookId) {
    return function (originalContructor) {
        // Thay đổi cấu trúc conctructor của class gốc => class extends originalContrucor
        // Muốn sửa đổi phải chỉ rõ kiểu class gốc => originalContrucor: T 
        // Kiểu T phải chỉ rõ interface controcutor cũng như interface nguyên mẫu 
        //      => T extends { new(...args: []): { name: string} }
        return class extends originalContructor {
            constructor(...args) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let ComponentS2 = class ComponentS2 {
    constructor(name) {
        this.name = name;
    }
};
ComponentS2 = __decorate([
    withTemplate2('<h1>THis is tag h1</h1>', 'app')
], ComponentS2);
function handleFilter(filter) {
    return new filter('new name');
}
class ClassFilter {
    constructor(name) {
        this.name = name;
    }
}
/**
 * @output { name: 'new name' }
 */
handleFilter(ClassFilter);
//# sourceMappingURL=summary.js.map