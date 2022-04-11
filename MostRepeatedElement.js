"use strict";

function repeatedElems(arr){
    let target;
    let max = 1;
    const newArr = [];
    arr.forEach(elem => {
        if (newArr[elem] !== undefined) {
            newArr[elem] += 1;
            if (newArr[elem] > max){
                target = elem;
                max = newArr[elem];
            }
        } else newArr[elem] = 1;
    });
    return target;
}

console.log(repeatedElems([1,23,8,78,78,12,12,13,13,13,15]));