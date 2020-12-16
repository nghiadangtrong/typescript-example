"use strict";
function addOverload(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return `${a}${b}`;
    }
    return a + b;
}
addOverload('text ', ' text2').split(' ');
addOverload(1.2323, 2).toFixed(2);
/**
 * Optionbal chaining : op1.op2.op3
 *
 * Nullish: '' ?? default => '' , undefined ?? default => default
 */ 
//# sourceMappingURL=function.js.map