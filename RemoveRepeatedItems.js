'use strict'

function makeUnique(arr) {
    const newArr = [];
    arr.forEach(elem => {
        if (newArr[elem] > 1) {
            delete newArr[elem];
        } else newArr[elem] = elem;
    });
    return newArr.filter(element => element);
}

console.log(makeUnique([1,23,8,78,78,12,12,13,13,13,15]));