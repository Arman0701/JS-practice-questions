'use strict'

function longestWord(str){
    return str.split(' ').reduce((prev, curr) => {
        if (prev.length < curr.length) return curr;
        return prev;
    }, '');
}

console.log(longestWord('Web Development Tutorial'));