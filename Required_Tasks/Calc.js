'use strict'

function calc(fn, sn, sign){
    switch(sign) {
        case '+':
            return fn + sn;
        case '-':
            return fn - sn;
        case '*':
            return fn / sn;
        case '/':
            return fn / sn;
    }
}

console.log(calc(1, 2, '+')) 
console.log(calc(1, 2, '-'))
console.log(calc(1, 2, '*'))
console.log(calc(1, 2, '/'))
