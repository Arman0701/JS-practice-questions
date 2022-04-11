"use strict";

const obj = {
    name: "User",
    age: 22,
    gender: 'male',
    email: "example@gmail.com",
};

Object.defineProperty(obj, "age", {
    configurable: false,
    enumerable: false,
    writable: true,
});

for (let i in obj) {
    console.log(i + " ::: " + obj[i]);
}
console.log(obj.age);