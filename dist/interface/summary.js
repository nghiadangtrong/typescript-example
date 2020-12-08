"use strict";
/**
 * - Đảm bảo class phải có thên thuộc tính hoặc phương thức
 */
class ConNguoi {
    constructor(name) {
        this.name = name;
        this.type = 'no fly';
        this.smart = 10;
    }
    move(s) {
        console.log("Call method inherit on interface");
    }
    setSmart(smart) {
        this.smart = smart;
    }
}
const noan2 = new ConNguoi('noan');
noan2.move('by foot');
noan2.type = '32131';
let add;
add = (n1, n2) => n1 + n2;
let show;
show = (s) => s;
//# sourceMappingURL=summary.js.map