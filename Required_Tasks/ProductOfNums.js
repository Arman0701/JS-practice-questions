'use strict'

function prod(...args){
    return args.reduce((previous, current) => previous * current)
}

console.log(prod(1,2,3,4,5,6,7,8,9));
console.log(prod(1,2,3,4));