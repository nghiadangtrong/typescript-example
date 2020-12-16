"use strict";
/**
 * Example 1
 *      extends : Yêu cầu các tham số đầu vào luôn là object
 */
function merge(a, b) {
    return Object.assign(a, b);
}
console.log(merge({ name: 'noan' }, { age: 30 }).age);
function countAndDescribe(element) {
    let descriptionText = 'Got no result';
    if (element.length === 1) {
        descriptionText = `Got 1 result`;
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} result`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Đây là một chuỗi')); // T là chuỗi 
console.log(countAndDescribe(['sports', 'cooking'])); // T là array
/**
 * Example 3:    keyof
 */
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
console.log(extractAndConvert({ name: 'Noan' }, 'name'));
/**
 * Example 4: Class
 */
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const stringData = new DataStorage();
stringData.addItem('noan');
stringData.addItem('shanks');
stringData.removeItem('shanks');
console.log(stringData.getItems());
const numberData = new DataStorage();
numberData.addItem(4);
numberData.addItem(8);
numberData.removeItem(4);
console.log(numberData.getItems());
function createCourseGoal(title, description) {
    let courseGoal = {}; // Khong loi
    courseGoal.title = title;
    courseGoal.description = description;
    return courseGoal;
}
/**
 * Example 6: Readonly<>
 *
 * @des Khóa giá trị một không cho thêm | Sửa | Xóa
 */
const names = ['noan', 'shanks'];
//names[0] = 'change value position 0'
//names.push('add new value')
//# sourceMappingURL=summary.js.map