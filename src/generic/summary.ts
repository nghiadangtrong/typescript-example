
/**
 * Example 1
 *      extends : Yêu cầu các tham số đầu vào luôn là object
 */
function merge<T extends object, U extends object> (a: T, b: U) {
    return Object.assign(a, b);
}

console.log(merge({name: 'noan'}, { age: 30}).age);

/**
 * Example 2
 *      Khả năng mở rộng nhiều loại dữ liệu có những thuộc tính tương đồng
 */
interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no result';

    if(element.length === 1) {
        descriptionText = `Got 1 result`;
    } else if(element.length > 1) {
        descriptionText = `Got ${element.length} result`; 
    }

    return [element, descriptionText]
}

console.log(countAndDescribe('Đây là một chuỗi'))       // T là chuỗi 
console.log(countAndDescribe(['sports', 'cooking']))    // T là array

/**
 * Example 3:    keyof
 */
function extractAndConvert <T extends object, U extends keyof T>(obj: T, key: U) {
    return `Value: ${obj[key]}`
}

console.log(extractAndConvert({ name: 'Noan'}, 'name'))


/**
 * Example 4: Class
 */

class DataStorage <T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data]
    }
}

const stringData = new DataStorage<string>();
stringData.addItem('noan');
stringData.addItem('shanks');
stringData.removeItem('shanks');
console.log(stringData.getItems());

const numberData = new DataStorage<number>();
numberData.addItem(4);
numberData.addItem(8);
numberData.removeItem(4);
console.log(numberData.getItems());


/**
 * Example 5: Partial
 * 
 * @des Cho phép khởi tạo một kiểu interface là rỗng 
 */
interface CourseGoal {
    title: string;
    description: string
}

function createCourseGoal (title: string, description: string): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}; // Khong loi
    courseGoal.title = title;
    courseGoal.description = description;
    return courseGoal as CourseGoal;
}


/**
 * Example 6: Readonly<>
 * 
 * @des Khóa giá trị một không cho thêm | Sửa | Xóa
 */
const names: Readonly<string[]> = ['noan', 'shanks']
//names[0] = 'change value position 0'
//names.push('add new value')