"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logClass(target) {
    console.log('Class decorator!');
    console.log(target);
}
function logProperty(target, propertyName) {
    console.log('Property decorator!');
    console.log(target);
    console.log(propertyName);
}
/**
 * @description set | get *
 */
function logAccessor(target, name, descriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function logMethod(target, name, descriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function logParameter(target, name, position) {
    console.log('Parameter Decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
// stt-5-end
let HandleProduct = class HandleProduct {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    // stt-3
    set price(price) {
        if (price > 0) {
            this._price = price;
        }
        else {
            throw new Error('Gia phai lon hon 0');
        }
    }
    // stt-4
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
};
__decorate([
    logProperty
], HandleProduct.prototype, "title", void 0);
__decorate([
    logProperty
], HandleProduct.prototype, "_price", void 0);
__decorate([
    logAccessor
], HandleProduct.prototype, "price", null);
__decorate([
    logMethod,
    __param(0, logParameter)
], HandleProduct.prototype, "getPriceWithTax", null);
HandleProduct = __decorate([
    logClass
], HandleProduct);
console.log('+++++++++++++++++++++++++++++++++++++');
const pd1 = new HandleProduct('tieu de', 2);
console.log('-------------------------------------');
//# sourceMappingURL=typeDecorator.js.map