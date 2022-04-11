"use strict";

function repeatedElems(arr){
    let max = 1;
    const newArr = [];
    arr.forEach(elem => {
        if (newArr[elem] !== undefined) {
            newArr[elem] += 1;
            if (newArr[elem] > max) max = newArr[elem];
        } else newArr[elem] = 1;
    });
    return max;
}

console.log(repeatedElems([1,23,8,78,78,12,12,13,13,13,15]));