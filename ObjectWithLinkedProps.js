"use strict";

const structure = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

function printUsingRecursion(obj) {
    if (obj?.value) {
        console.log(obj.value);
        if (obj?.next) {
            printUsingRecursion(obj.next);
        }
    };
}

console.log(printUsingRecursion(structure))