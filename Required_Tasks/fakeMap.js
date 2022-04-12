'use strict'

Array.prototype.fakeMap = function (cb){
    let newArr = [];
    for (let i = 0; i < this.length; i++){
        newArr = [...newArr, cb(this[i])];
    }
    return newArr;
};

console.log([1,2,3,4,5,6,7,8,9,0].fakeMap((element) => element * 2));