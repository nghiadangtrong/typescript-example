// Initialized
interface Profile {
    readonly name: string;
    age?: number;
}

let profile: Profile = {
    name: "Join"
}

// Key Index 
interface A {
    someProps: string;
    [key: string]: string | number;
}

const a: A = { someProps: "someProps" };
a.x1 = 123;

// Call 
interface Sum {
    (a: number, b: number): number;
    prop1: string
}

const sum: Sum = (a: number, b: number): number => a + b;
sum.prop1 = 'prop somthing'

// extends
interface Parrent1 {
    a: string;
}

interface Parrent2 {
    b: string;
}

interface Parrent3 {
    c: string;
}

interface Child extends Parrent1, Parrent2, Parrent3 { }

const child: Child = { a: "a", b: "b", c: "c"}