/**
 * TODO: Function overloads
 */
function addOverload(a:number, b:number): number
function addOverload(a:string, b:string): string
function addOverload(a:number, b:string): string
function addOverload(a:string, b:number): string
function addOverload(a: number|string, b: number|string) {
    if(typeof a === 'string' || typeof b === 'string') {
        return `${a}${b}`;
    }

    return a + b;
}

addOverload('text ', ' text2').split(' ')
addOverload(1.2323, 2).toFixed(2)

/**
 * Optionbal chaining : op1.op2.op3
 * 
 * Nullish: '' ?? default => '' , undefined ?? default => default 
 */