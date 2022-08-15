// Boolean
let b: boolean = false;

// Number
let num: number = 1 + 0b1 + 0o1 + 0x1;

// String
let str: string = "";

// Null vs Undefined
let _null: null = null;
let _undefined: undefined = undefined;

// Object 
type primitiveTypes = boolean | number | string | symbol | null | undefined;
const myObj: object = new Map();

// Void
function log (message: string): void {
    console.log(message);
}

// Array 
let array1: string[] = ["a", "b", "c"];
let array2: Array<string> = ["a", "b", "c"];

// Tuple: Bộ giá trị
let tuple: [string, number] = ['str', 1];

// Enum
enum Color {
    Red,
    Green = 2,
    Blue = 'blue'
}
let myFavariteColor = Color.Green;
let myFavariteColor2 = Color[2];

// Assertion: Quả quyết kiểu dữ liệu

const email = document.getElementById('email');
if (email) {
    email.addEventListener('change', (e) => {
        // cach 1
        const target = e.currentTarget as HTMLInputElement;
        console.log(target.value)

        // cach 2
        const input = <HTMLInputElement>e.currentTarget;
        console.log(input.value)
    })
}
