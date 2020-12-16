function logClass (target: any) {
    console.log('Class decorator!');
    console.log(target)
}

function logProperty (target: any, propertyName: string | Symbol) {
    console.log('Property decorator!')
    console.log(target)
    console.log(propertyName)
}

/**
 * @description set | get * 
 */
function logAccessor(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name)
    console.log(descriptor)
}

function logMethod(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function logParameter(target: any, name: string | Symbol, position: number) {
    console.log('Parameter Decorator!');
    console.log(target);
    console.log(name);
    console.log(position)
}


@logClass
class HandleProduct {

    @logProperty
    title: string;

    @logProperty
    private _price: number;

    constructor (title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @logAccessor
    set price(price: number) {
        if(price > 0) {
            this._price = price;
        } else {
            throw new Error('Gia phai lon hon 0')
        }
    }

    @logMethod
    getPriceWithTax(@logParameter tax: number) {
        return this._price * (1 + tax);
    }
}