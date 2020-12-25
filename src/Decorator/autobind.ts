/**
 * Autobin
 */

function Autobind (target: any, name: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    let adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        }
    }
    return adjDescriptor;
}

class PrintT {
    message = 'This is messages';

    @Autobind
    showMessage(){
        console.log(this.message);
    }
}

let _printT = new PrintT();

document.addEventListener('load', _printT.showMessage)